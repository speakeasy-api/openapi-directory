package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type CustomGatewayProcessPaymentsAndRefunds struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCustomGatewayProcessPaymentsAndRefunds(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CustomGatewayProcessPaymentsAndRefunds {
	return &CustomGatewayProcessPaymentsAndRefunds{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostCustomGatewayPaymentOwnershipID - Adds a payment for an app on behalf of a user
// - Results are returned for the market provided within the basic authentication credentials
// - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
func (s *CustomGatewayProcessPaymentsAndRefunds) PostCustomGatewayPaymentOwnershipID(ctx context.Context, request operations.PostCustomGatewayPaymentOwnershipIDRequest) (*operations.PostCustomGatewayPaymentOwnershipIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/custom-gateway/payment/{ownershipId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCustomGatewayPaymentOwnershipIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 412:
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}

// PostCustomGatewayRefundOwnershipID - Fully or partially refund payment for an app on behalf of a user
// - Results are returned for the market provided within the basic authentication credentials
// - Payments must be enabled and 'Custom' must be selected as the gateway in order to use this API endpoint
func (s *CustomGatewayProcessPaymentsAndRefunds) PostCustomGatewayRefundOwnershipID(ctx context.Context, request operations.PostCustomGatewayRefundOwnershipIDRequest) (*operations.PostCustomGatewayRefundOwnershipIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/custom-gateway/refund/{ownershipId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCustomGatewayRefundOwnershipIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 412:
	default:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	}

	return res, nil
}
