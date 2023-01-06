package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStyleGuidePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type CreateStyleGuideRequestBodyStyleguides struct {
	Content     []byte `multipartForm:"content"`
	Styleguides string `multipartForm:"name=styleguides[]"`
}

type CreateStyleGuideRequestBody struct {
	Styleguides CreateStyleGuideRequestBodyStyleguides `multipartForm:"file"`
}

type CreateStyleGuideRequest struct {
	PathParams CreateStyleGuidePathParams
	Request    *CreateStyleGuideRequestBody `request:"mediaType=multipart/form-data"`
}

type CreateStyleGuideResponse struct {
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
	StyleGuideList *shared.StyleGuideList
}
