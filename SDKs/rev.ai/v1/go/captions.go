package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type Captions struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCaptions(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Captions {
	return &Captions{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCaptions - Get Captions
// Returns the caption output for a transcription job. We currently support SubRip (SRT) and Web Video Text Tracks (VTT) output.
// Caption output format can be specified in the `Accept` header. Returns SRT by default.
// ***
// Note: For streaming jobs, transient failure of our storage during a live session may prevent the final hypothesis elements from saving properly, resulting in an incomplete caption file. This is rare, but not impossible.
func (s *Captions) GetCaptions(ctx context.Context, request operations.GetCaptionsRequest) (*operations.GetCaptionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/jobs/{id}/captions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCaptionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/x-subrip`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		case utils.MatchContentType(contentType, `text/vtt`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCaptions401ApplicationProblemPlusJSONAny = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *operations.GetCaptions404ApplicationProblemPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCaptions404ApplicationProblemPlusJSONObject = out
		}
	case httpRes.StatusCode == 405:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *operations.GetCaptions405ApplicationProblemPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCaptions405ApplicationProblemPlusJSONObject = out
		}
	case httpRes.StatusCode == 406:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *operations.GetCaptions406ApplicationProblemPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCaptions406ApplicationProblemPlusJSONObject = out
		}
	case httpRes.StatusCode == 409:
		switch {
		case utils.MatchContentType(contentType, `application/problem+json`):
			var out *operations.GetCaptions409ApplicationProblemPlusJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetCaptions409ApplicationProblemPlusJSONObject = out
		}
	}

	return res, nil
}
