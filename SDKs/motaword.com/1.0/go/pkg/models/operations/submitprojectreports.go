package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitProjectReportsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type SubmitProjectReportsRequestBody struct {
	ActivityType *string `multipartForm:"name=activity_type"`
	Message      *string `multipartForm:"name=message"`
}

type SubmitProjectReportsRequest struct {
	PathParams SubmitProjectReportsPathParams
	Request    *SubmitProjectReportsRequestBody `request:"mediaType=multipart/form-data"`
}

type SubmitProjectReportsResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
