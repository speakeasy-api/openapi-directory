package operations

import (
	"openapi/pkg/models/shared"
)

type ClassifyImagePathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type ClassifyImageQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type ClassifyImageRequestBodyImageData struct {
	Content   []byte `multipartForm:"content"`
	ImageData string `multipartForm:"name=imageData"`
}

type ClassifyImageRequestBody struct {
	ImageData ClassifyImageRequestBodyImageData `multipartForm:"file"`
}

type ClassifyImageRequest struct {
	PathParams  ClassifyImagePathParams
	QueryParams ClassifyImageQueryParams
	Request     ClassifyImageRequestBody `request:"mediaType=multipart/form-data"`
}

type ClassifyImageResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
