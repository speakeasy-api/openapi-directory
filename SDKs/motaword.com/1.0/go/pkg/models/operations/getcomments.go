package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetCommentsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetCommentsRequest struct {
	PathParams  GetCommentsPathParams
	QueryParams GetCommentsQueryParams
}

type GetCommentsResponse struct {
	CommentList *shared.CommentList
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
