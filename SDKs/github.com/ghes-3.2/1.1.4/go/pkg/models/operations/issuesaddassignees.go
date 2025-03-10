// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type IssuesAddAssigneesRequestBody struct {
	// Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
	Assignees []string `json:"assignees,omitempty"`
}

type IssuesAddAssigneesRequest struct {
	RequestBody *IssuesAddAssigneesRequestBody `request:"mediaType=application/json"`
	// The number that identifies the issue.
	IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesAddAssigneesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	Issue *shared.Issue
}
