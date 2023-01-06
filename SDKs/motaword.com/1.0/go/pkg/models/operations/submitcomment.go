package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitCommentPathParams struct {
	ActivityID int64 `pathParam:"style=simple,explode=false,name=activityId"`
	ProjectID  int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type SubmitCommentRequestBody struct {
	Comment string `multipartForm:"name=comment"`
}

type SubmitCommentRequest struct {
	PathParams SubmitCommentPathParams
	Request    *SubmitCommentRequestBody `request:"mediaType=multipart/form-data"`
}

type SubmitCommentResponse struct {
	Comment     *shared.Comment
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
