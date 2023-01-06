package operations

import (
	"openapi/pkg/models/shared"
)

type CancelProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type CancelProjectRequestBody struct {
	Reason *string `multipartForm:"name=reason"`
}

type CancelProjectRequest struct {
	PathParams CancelProjectPathParams
	Request    *CancelProjectRequestBody `request:"mediaType=multipart/form-data"`
}

type CancelProjectResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
