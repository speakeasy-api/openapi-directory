// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PullsRequestReviewersRequestBody2 struct {
	// An array of user `login`s that will be requested.
	Reviewers []string `json:"reviewers,omitempty"`
	// An array of team `slug`s that will be requested.
	TeamReviewers []string `json:"team_reviewers"`
}

type PullsRequestReviewersRequestBody1 struct {
	// An array of user `login`s that will be requested.
	Reviewers []string `json:"reviewers"`
	// An array of team `slug`s that will be requested.
	TeamReviewers []string `json:"team_reviewers,omitempty"`
}

type PullsRequestReviewersRequest struct {
	RequestBody interface{} `request:"mediaType=application/json"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The number that identifies the pull request.
	PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsRequestReviewersResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Forbidden
	BasicError *shared.BasicError
	// Response
	PullRequestSimple *shared.PullRequestSimple
}
