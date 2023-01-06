package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type AssetsCorrelationMatrix struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAssetsCorrelationMatrix(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AssetsCorrelationMatrix {
	return &AssetsCorrelationMatrix{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostAssetsCorrelationMatrix - Correlation Matrix
// Compute the Pearson correlation matrix of assets from either:
// * The assets returns
// * The assets covariance matrix
//
// References
// * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
func (s *AssetsCorrelationMatrix) PostAssetsCorrelationMatrix(ctx context.Context, request operations.PostAssetsCorrelationMatrixRequest) (*operations.PostAssetsCorrelationMatrixResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix"

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

	res := &operations.PostAssetsCorrelationMatrixResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrix200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrix200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCorrelationMatrixNearest - Nearest Correlation Matrix
// Compute the _closest_ correlation matrix to an approximate assets correlation matrix, optionally keeping a selected number of correlations fixed, _closest_ being defined in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm).
//
// References
// * [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)
func (s *AssetsCorrelationMatrix) PostAssetsCorrelationMatrixNearest(ctx context.Context, request operations.PostAssetsCorrelationMatrixNearestRequest) (*operations.PostAssetsCorrelationMatrixNearestResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix/nearest"

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

	res := &operations.PostAssetsCorrelationMatrixNearestResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrixNearest200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrixNearest200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCorrelationMatrixShrinkage - Correlation Matrix Shrinkage
// Compute a correlation matrix as a weighted average of an assets correlation matrix and a target correlation matrix, the target correlation matrix being either:
// * An equicorrelation matrix made of 1
// * An equicorrelation matrix made of 0
// * An equicorrelation matrix made of -1/(n-1), with n the number of assets
// * A provided correlation matrix
//
// References
// * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)
func (s *AssetsCorrelationMatrix) PostAssetsCorrelationMatrixShrinkage(ctx context.Context, request operations.PostAssetsCorrelationMatrixShrinkageRequest) (*operations.PostAssetsCorrelationMatrixShrinkageResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix/shrinkage"

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

	res := &operations.PostAssetsCorrelationMatrixShrinkageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrixShrinkage200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrixShrinkage200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PostAssetsCorrelationMatrixValidation - Correlation Matrix Validation
// Validate whether a matrix is a correlation matrix.
//
// References
// * [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)
func (s *AssetsCorrelationMatrix) PostAssetsCorrelationMatrixValidation(ctx context.Context, request operations.PostAssetsCorrelationMatrixValidationRequest) (*operations.PostAssetsCorrelationMatrixValidationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/assets/correlation/matrix/validation"

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

	res := &operations.PostAssetsCorrelationMatrixValidationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PostAssetsCorrelationMatrixValidation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PostAssetsCorrelationMatrixValidation200ApplicationJSONObject = out
		}
	}

	return res, nil
}
