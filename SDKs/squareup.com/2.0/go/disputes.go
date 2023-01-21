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

type Disputes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDisputes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Disputes {
	return &Disputes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AcceptDispute - AcceptDispute
// Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
// updates the dispute state to ACCEPTED.
//
// Square debits the disputed amount from the seller’s Square account. If the Square account
// does not have sufficient funds, Square debits the associated bank account.
func (s *Disputes) AcceptDispute(ctx context.Context, request operations.AcceptDisputeRequest) (*operations.AcceptDisputeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}/accept", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.AcceptDisputeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AcceptDisputeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AcceptDisputeResponse = out
		}
	}

	return res, nil
}

// CreateDisputeEvidenceText - CreateDisputeEvidenceText
// Uploads text to use as evidence for a dispute challenge.
func (s *Disputes) CreateDisputeEvidenceText(ctx context.Context, request operations.CreateDisputeEvidenceTextRequest) (*operations.CreateDisputeEvidenceTextResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}/evidence-text", request.PathParams)

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

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateDisputeEvidenceTextResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CreateDisputeEvidenceTextResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CreateDisputeEvidenceTextResponse = out
		}
	}

	return res, nil
}

// DeleteDisputeEvidence - DeleteDisputeEvidence
// Removes specified evidence from a dispute.
//
// Square does not send the bank any evidence that is removed. Also, you cannot remove evidence after
// submitting it to the bank using [SubmitEvidence](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/submit-evidence).
func (s *Disputes) DeleteDisputeEvidence(ctx context.Context, request operations.DeleteDisputeEvidenceRequest) (*operations.DeleteDisputeEvidenceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}/evidence/{evidence_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
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

	res := &operations.DeleteDisputeEvidenceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DeleteDisputeEvidenceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteDisputeEvidenceResponse = out
		}
	}

	return res, nil
}

// ListDisputeEvidence - ListDisputeEvidence
// Returns a list of evidence associated with a dispute.
func (s *Disputes) ListDisputeEvidence(ctx context.Context, request operations.ListDisputeEvidenceRequest) (*operations.ListDisputeEvidenceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}/evidence", request.PathParams)

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

	res := &operations.ListDisputeEvidenceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListDisputeEvidenceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDisputeEvidenceResponse = out
		}
	}

	return res, nil
}

// ListDisputes - ListDisputes
// Returns a list of disputes associated with a particular account.
func (s *Disputes) ListDisputes(ctx context.Context, request operations.ListDisputesRequest) (*operations.ListDisputesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/v2/disputes"

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

	res := &operations.ListDisputesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ListDisputesResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ListDisputesResponse = out
		}
	}

	return res, nil
}

// RetrieveDispute - RetrieveDispute
// Returns details about a specific dispute.
func (s *Disputes) RetrieveDispute(ctx context.Context, request operations.RetrieveDisputeRequest) (*operations.RetrieveDisputeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}", request.PathParams)

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

	res := &operations.RetrieveDisputeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveDisputeResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveDisputeResponse = out
		}
	}

	return res, nil
}

// RetrieveDisputeEvidence - RetrieveDisputeEvidence
// Returns the evidence metadata specified by the evidence ID in the request URL path
//
// You must maintain a copy of the evidence you upload if you want to reference it later. You cannot
// download the evidence after you upload it.
func (s *Disputes) RetrieveDisputeEvidence(ctx context.Context, request operations.RetrieveDisputeEvidenceRequest) (*operations.RetrieveDisputeEvidenceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}/evidence/{evidence_id}", request.PathParams)

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

	res := &operations.RetrieveDisputeEvidenceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RetrieveDisputeEvidenceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RetrieveDisputeEvidenceResponse = out
		}
	}

	return res, nil
}

// SubmitEvidence - SubmitEvidence
// Submits evidence to the cardholder's bank.
//
// Before submitting evidence, Square compiles all available evidence. This includes evidence uploaded
// using the [CreateDisputeEvidenceFile](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-file) and
// [CreateDisputeEvidenceText](https://developer.squareup.com/reference/square_2021-08-18/disputes-api/create-dispute-evidence-text) endpoints and
// evidence automatically provided by Square, when available.
func (s *Disputes) SubmitEvidence(ctx context.Context, request operations.SubmitEvidenceRequest) (*operations.SubmitEvidenceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/v2/disputes/{dispute_id}/submit-evidence", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
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

	res := &operations.SubmitEvidenceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SubmitEvidenceResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubmitEvidenceResponse = out
		}
	}

	return res, nil
}
