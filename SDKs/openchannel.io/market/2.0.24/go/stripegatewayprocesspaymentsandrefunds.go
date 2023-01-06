package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type StripeGatewayProcessPaymentsAndRefunds struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewStripeGatewayProcessPaymentsAndRefunds(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *StripeGatewayProcessPaymentsAndRefunds {
	return &StripeGatewayProcessPaymentsAndRefunds{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeID - Disconnects a developer's Stripe account
//
// - Results are returned for the market provided within the basic authentication credentials
func (s *StripeGatewayProcessPaymentsAndRefunds) DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeID(ctx context.Context, request operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest) (*operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/developer/{developerId}/accounts/{stripeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse{
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

// DeleteStripeGatewayUserUserIDCardsCardID - Removes a credit card for a user
func (s *StripeGatewayProcessPaymentsAndRefunds) DeleteStripeGatewayUserUserIDCardsCardID(ctx context.Context, request operations.DeleteStripeGatewayUserUserIDCardsCardIDRequest) (*operations.DeleteStripeGatewayUserUserIDCardsCardIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/user/{userId}/cards/{cardId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteStripeGatewayUserUserIDCardsCardIDResponse{
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

// GetStripeGatewayDeveloperDeveloperIDAccounts - Returns a developers connected Stripe accounts
// - Results are returned for the market provided within the basic authentication credentials
func (s *StripeGatewayProcessPaymentsAndRefunds) GetStripeGatewayDeveloperDeveloperIDAccounts(ctx context.Context, request operations.GetStripeGatewayDeveloperDeveloperIDAccountsRequest) (*operations.GetStripeGatewayDeveloperDeveloperIDAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/developer/{developerId}/accounts", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStripeGatewayDeveloperDeveloperIDAccountsResponse{
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

// GetStripeGatewayUserUserIDCards - Returns credit cards for this user
// - Results are returned for the market provided within the basic authentication credentials
func (s *StripeGatewayProcessPaymentsAndRefunds) GetStripeGatewayUserUserIDCards(ctx context.Context, request operations.GetStripeGatewayUserUserIDCardsRequest) (*operations.GetStripeGatewayUserUserIDCardsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/user/{userId}/cards", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetStripeGatewayUserUserIDCardsResponse{
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

// PostStripeGatewayDeveloperDeveloperIDAccounts - Generate a temporary URL to allow a developer to connect their Stripe account
// - Results are returned for the market provided within the basic authentication credentials
// - The URL generated by this method is only valid for 48 hours.
func (s *StripeGatewayProcessPaymentsAndRefunds) PostStripeGatewayDeveloperDeveloperIDAccounts(ctx context.Context, request operations.PostStripeGatewayDeveloperDeveloperIDAccountsRequest) (*operations.PostStripeGatewayDeveloperDeveloperIDAccountsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/developer/{developerId}/accounts", request.PathParams)

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

	res := &operations.PostStripeGatewayDeveloperDeveloperIDAccountsResponse{
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

// PostStripeGatewayUserUserIDCards - Adds credit card for this user
// - Results are returned for the market provided within the basic authentication credentials
func (s *StripeGatewayProcessPaymentsAndRefunds) PostStripeGatewayUserUserIDCards(ctx context.Context, request operations.PostStripeGatewayUserUserIDCardsRequest) (*operations.PostStripeGatewayUserUserIDCardsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/user/{userId}/cards", request.PathParams)

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

	res := &operations.PostStripeGatewayUserUserIDCardsResponse{
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

// PostStripeGatewayUserUserIDCardsCardID - Updates a credit card for this user
//
// - Results are returned for the market provided within the basic authentication credentials
func (s *StripeGatewayProcessPaymentsAndRefunds) PostStripeGatewayUserUserIDCardsCardID(ctx context.Context, request operations.PostStripeGatewayUserUserIDCardsCardIDRequest) (*operations.PostStripeGatewayUserUserIDCardsCardIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/stripe-gateway/user/{userId}/cards/{cardId}", request.PathParams)

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

	res := &operations.PostStripeGatewayUserUserIDCardsCardIDResponse{
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
