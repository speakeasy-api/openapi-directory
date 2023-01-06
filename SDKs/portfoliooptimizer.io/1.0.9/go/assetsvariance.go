package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type AssetsVariance struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssetsVariance(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AssetsVariance {
	return &AssetsVariance{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostAssetsVariance - Variance
// Compute the variance of one or several asset(s) from either:
// * The asset(s) returns
// * The assets covariance matrix
// * The asset(s) volatility
//
// References
// * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
func (s *AssetsVariance) PostAssetsVariance(ctx context.Context, request operations.PostAssetsVarianceRequest) (*operations.PostAssetsVarianceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/variance"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsVarianceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVariance200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVariance200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsVarianceSample - Sample variance
// Compute the sample variance of one or several asset(s) from the asset(s) returns.
//
// > This endpoint is similar to the endpoint [`/assets/variance`](#post-/assets/variance), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the variance.
//
// References
// * [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)
func (s *AssetsVariance) PostAssetsVarianceSample(ctx context.Context, request operations.PostAssetsVarianceSampleRequest) (*operations.PostAssetsVarianceSampleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/variance/sample"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostAssetsVarianceSampleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVarianceSample200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVarianceSample200ApplicationJSONObject = out
		}
	}

	return res, nil
}
