package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PullsListReviewCommentsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListReviewCommentsForRepoQueryParams struct {
	Direction *shared.RepoEnum4 `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64            `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64            `queryParam:"style=form,explode=true,name=per_page"`
	Since     *time.Time        `queryParam:"style=form,explode=true,name=since"`
	Sort      *shared.RepoEnum6 `queryParam:"style=form,explode=true,name=sort"`
}

type PullsListReviewCommentsForRepoRequest struct {
	PathParams  PullsListReviewCommentsForRepoPathParams
	QueryParams PullsListReviewCommentsForRepoQueryParams
}

type PullsListReviewCommentsForRepoResponse struct {
	ContentType               string
	Headers                   map[string][]string
	StatusCode                int64
	PullRequestReviewComments []shared.PullRequestReviewComment
}
