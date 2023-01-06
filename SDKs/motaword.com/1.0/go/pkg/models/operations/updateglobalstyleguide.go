package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGlobalStyleGuideRequestBodyStyleguide struct {
	Content    []byte `multipartForm:"content"`
	Styleguide string `multipartForm:"name=styleguide"`
}

type UpdateGlobalStyleGuideRequestBody struct {
	Styleguide UpdateGlobalStyleGuideRequestBodyStyleguide `multipartForm:"file"`
}

type UpdateGlobalStyleGuideRequest struct {
	Request *UpdateGlobalStyleGuideRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateGlobalStyleGuideResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
