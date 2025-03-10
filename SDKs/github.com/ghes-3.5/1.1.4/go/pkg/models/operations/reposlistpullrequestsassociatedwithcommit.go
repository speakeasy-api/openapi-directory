// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposListPullRequestsAssociatedWithCommitRequest struct {
	// The SHA of the commit.
	CommitSha string `pathParam:"style=simple,explode=false,name=commit_sha"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// Page number of the results to fetch.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListPullRequestsAssociatedWithCommitResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int
	RawResponse *http.Response
	// Response
	PullRequestSimples []shared.PullRequestSimple
}
