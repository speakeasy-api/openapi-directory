package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ScheduledPayments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewScheduledPayments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ScheduledPayments {
	return &ScheduledPayments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetAccountsAccountIDScheduledPayments - Get Scheduled Payments
// Get Scheduled Payments by Account ID
func (s *ScheduledPayments) GetAccountsAccountIDScheduledPayments(ctx context.Context, request operations.GetAccountsAccountIDScheduledPaymentsRequest) (*operations.GetAccountsAccountIDScheduledPaymentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/accounts/{accountId}/scheduled-payments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetAccountsAccountIDScheduledPaymentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObReadScheduledPayment3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBReadScheduledPayment3 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObReadScheduledPayment3
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBReadScheduledPayment3 = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 406:
	case httpRes.StatusCode == 500:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		case utils.MatchContentType(contentType, `application/json; charset=utf-8`):
			var out *shared.ObErrorResponse1
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OBErrorResponse1 = out
		}
	}

	return res, nil
}
