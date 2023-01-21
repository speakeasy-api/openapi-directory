package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Merchants struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMerchants(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Merchants {
	return &Merchants{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ListMerchants - ListMerchants
// Returns `Merchant` information for a given access token.
//
// If you don't know a `Merchant` ID, you can use this endpoint to retrieve the merchant ID for an access token.
// You can specify your personal access token to get your own merchant information or specify an OAuth token
// to get the information for the  merchant that granted you access.
//
// If you know the merchant ID, you can also use the [RetrieveMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/retrieve-merchant)
// endpoint to get the merchant information.
func (s *Merchants) ListMerchants(ctx context.Context, request operations.ListMerchantsRequest) (*operations.ListMerchantsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/merchants"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListMerchantsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListMerchantsResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListMerchantsResponse = out
		}
	}

	return res, nil
}

// RetrieveMerchant - RetrieveMerchant
// Retrieve a `Merchant` object for the given `merchant_id`.
func (s *Merchants) RetrieveMerchant(ctx context.Context, request operations.RetrieveMerchantRequest) (*operations.RetrieveMerchantResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/merchants/{merchant_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.RetrieveMerchantResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveMerchantResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveMerchantResponse = out
		}
	}

	return res, nil
}
