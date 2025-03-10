// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type IssuesRemoveLabelRequest struct {
	// The number that identifies the issue.
	IssueNumber int64  `pathParam:"style=simple,explode=false,name=issue_number"`
	Name        string `pathParam:"style=simple,explode=false,name=name"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type IssuesRemoveLabelResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Moved permanently
	BasicError *shared.BasicError
	// Response
	Labels []shared.Label
}
