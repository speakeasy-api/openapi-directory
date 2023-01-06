package operations

import (
	"openapi/pkg/models/shared"
)

type GetBlogPostsQueryParams struct {
	Fallback *bool   `queryParam:"style=form,explode=true,name=fallback"`
	Locale   *string `queryParam:"style=form,explode=true,name=locale"`
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64  `queryParam:"style=form,explode=true,name=per_page"`
}

type GetBlogPostsRequest struct {
	QueryParams GetBlogPostsQueryParams
}

type GetBlogPostsResponse struct {
	BlogArticleList *shared.BlogArticleList
	ContentType     string
	StatusCode      int64
}
