// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ActionsReRunJobForWorkflowRunRequestBody struct {
	// Whether to enable debug logging for the re-run.
	EnableDebugLogging *bool `json:"enable_debug_logging,omitempty"`
}

type ActionsReRunJobForWorkflowRunRequest struct {
	RequestBody *ActionsReRunJobForWorkflowRunRequestBody `request:"mediaType=application/json"`
	// The unique identifier of the job.
	JobID int64 `pathParam:"style=simple,explode=false,name=job_id"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsReRunJobForWorkflowRunResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Forbidden
	BasicError *shared.BasicError
	// Response
	EmptyObject map[string]interface{}
}
