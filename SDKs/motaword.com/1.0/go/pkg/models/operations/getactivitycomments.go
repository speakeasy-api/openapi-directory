package operations

import (
	"openapi/pkg/models/shared"
)

type GetActivityCommentsPathParams struct {
	ActivityID int64 `pathParam:"style=simple,explode=false,name=activityId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetActivityCommentsRequest struct {
	PathParams GetActivityCommentsPathParams
}

type GetActivityCommentsResponse struct {
	CommentList *shared.CommentList
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
