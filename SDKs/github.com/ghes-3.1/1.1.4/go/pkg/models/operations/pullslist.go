package operations

import (
	"openapi/pkg/models/shared"
)

type PullsListPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type PullsListQueryParams struct {
	Base      *string           `queryParam:"style=form,explode=true,name=base"`
	Direction *shared.RepoEnum4 `queryParam:"style=form,explode=true,name=direction"`
	Head      *string           `queryParam:"style=form,explode=true,name=head"`
	Page      *int64            `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64            `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *shared.RepoEnum5 `queryParam:"style=form,explode=true,name=sort"`
	State     *shared.RepoEnum2 `queryParam:"style=form,explode=true,name=state"`
}

type PullsListRequest struct {
	PathParams  PullsListPathParams
	QueryParams PullsListQueryParams
}

type PullsListResponse struct {
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
	PullRequestSimples []shared.PullRequestSimple
	ValidationError    *shared.ValidationError
}
