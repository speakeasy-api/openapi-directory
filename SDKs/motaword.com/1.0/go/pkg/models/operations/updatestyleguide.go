package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStyleGuidePathParams struct {
	ProjectID    int64 `pathParam:"style=simple,explode=false,name=projectId"`
	StyleGuideID int64 `pathParam:"style=simple,explode=false,name=styleGuideId"`
}

type UpdateStyleGuideRequestBodyStyleguides struct {
	Content     []byte `multipartForm:"content"`
	Styleguides string `multipartForm:"name=styleguides"`
}

type UpdateStyleGuideRequestBody struct {
	Styleguides UpdateStyleGuideRequestBodyStyleguides `multipartForm:"file"`
}

type UpdateStyleGuideRequest struct {
	PathParams UpdateStyleGuidePathParams
	Request    *UpdateStyleGuideRequestBody `request:"mediaType=multipart/form-data"`
}

type UpdateStyleGuideResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	StyleGuide  *shared.StyleGuide
}
