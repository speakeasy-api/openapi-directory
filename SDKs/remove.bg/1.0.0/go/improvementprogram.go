package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
	"strings"
)

type ImprovementProgram struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewImprovementProgram(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ImprovementProgram {
	return &ImprovementProgram{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PostImprove - Submit an image to the remove.bg Improvement program
// * Contribute an image that remove.bg is currently not able to remove the background from properly
// * Help us make remove.bg better
// * Get better results for similiar images in the future
//
// Notes:
//   - By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
//   - File size: up to 12MB
//   - up to 100 files per day (up to 1000 for Enterprise customers). <br> Higher Rate Limits are available <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.
//
// Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.
//
// Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.
func (s *ImprovementProgram) PostImprove(ctx context.Context, request operations.PostImproveRequest) (*operations.PostImproveResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/improve"

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

	res := &operations.PostImproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `*/*`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 429:
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
