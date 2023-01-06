package operations

import (
	"openapi/pkg/models/shared"
)

type QuickTestImagePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type QuickTestImageQueryParams struct {
	IterationID *string `queryParam:"style=form,explode=true,name=iterationId"`
	Store       *bool   `queryParam:"style=form,explode=true,name=store"`
}

type QuickTestImageRequestBodyImageData struct {
	Content   []byte `multipartForm:"content"`
	ImageData string `multipartForm:"name=imageData"`
}

type QuickTestImageRequestBody struct {
	ImageData QuickTestImageRequestBodyImageData `multipartForm:"file"`
}

type QuickTestImageRequest struct {
	PathParams  QuickTestImagePathParams
	QueryParams QuickTestImageQueryParams
	Request     QuickTestImageRequestBody `request:"mediaType=multipart/form-data"`
}

type QuickTestImageResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
