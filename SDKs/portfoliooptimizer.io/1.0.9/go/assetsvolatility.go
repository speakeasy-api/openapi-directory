package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type AssetsVolatility struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssetsVolatility(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AssetsVolatility {
	return &AssetsVolatility{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostAssetsVolatility - Volatility
// Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:
// * The asset(s) returns
// * The assets covariance matrix
// * The asset(s) variance
//
// References
// * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
func (s *AssetsVolatility) PostAssetsVolatility(ctx context.Context, request operations.PostAssetsVolatilityRequest) (*operations.PostAssetsVolatilityResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/volatility"

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

	res := &operations.PostAssetsVolatilityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVolatility200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVolatility200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsVolatilitySample - Sample volatility
// Compute the sample volatility (i.e., sample standard deviation) of one or several asset(s) from the asset(s) returns.
//
// > This endpoint is similar to the endpoint [`/assets/volatility`](#post-/assets/volatility), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the volatility.
//
// References
// * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)
func (s *AssetsVolatility) PostAssetsVolatilitySample(ctx context.Context, request operations.PostAssetsVolatilitySampleRequest) (*operations.PostAssetsVolatilitySampleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/volatility/sample"

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

	res := &operations.PostAssetsVolatilitySampleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsVolatilitySample200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsVolatilitySample200ApplicationJSONObject = out
		}
	}

	return res, nil
}
