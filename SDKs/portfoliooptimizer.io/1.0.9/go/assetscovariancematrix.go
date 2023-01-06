package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type AssetsCovarianceMatrix struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssetsCovarianceMatrix(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AssetsCovarianceMatrix {
	return &AssetsCovarianceMatrix{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostAssetsCovarianceMatrix - Covariance Matrix
// Compute the covariance matrix of assets from either:
// * The assets correlation matrix and their volatilities (i.e., standard deviations)
// * The assets correlation matrix and their variances
// * The assets returns
//
// References
// * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
func (s *AssetsCovarianceMatrix) PostAssetsCovarianceMatrix(ctx context.Context, request operations.PostAssetsCovarianceMatrixRequest) (*operations.PostAssetsCovarianceMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/covariance/matrix"

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

	res := &operations.PostAssetsCovarianceMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCovarianceMatrix200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCovarianceMatrix200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCovarianceMatrixSample - Sample Covariance Matrix
// Compute the sample covariance matrix of assets returns.
//
// > This endpoint is similar to the endpoint [`/assets/covariance/matrix`](#post-/assets/covariance/matrix), but uses [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction) to compute the covariance matrix.
//
// References
// * [Wikipedia, Sample Mean and Covariance](https://en.wikipedia.org/wiki/Sample_mean_and_covariance)
func (s *AssetsCovarianceMatrix) PostAssetsCovarianceMatrixSample(ctx context.Context, request operations.PostAssetsCovarianceMatrixSampleRequest) (*operations.PostAssetsCovarianceMatrixSampleResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/covariance/matrix/sample"

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

	res := &operations.PostAssetsCovarianceMatrixSampleResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCovarianceMatrixSample200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCovarianceMatrixSample200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCovarianceMatrixValidation - Covariance Matrix Validation
// Validate whether a matrix is a covariance matrix.
//
// References
// * [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)
func (s *AssetsCovarianceMatrix) PostAssetsCovarianceMatrixValidation(ctx context.Context, request operations.PostAssetsCovarianceMatrixValidationRequest) (*operations.PostAssetsCovarianceMatrixValidationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/covariance/matrix/validation"

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

	res := &operations.PostAssetsCovarianceMatrixValidationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCovarianceMatrixValidation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCovarianceMatrixValidation200ApplicationJSONObject = out
		}
	}

	return res, nil
}
