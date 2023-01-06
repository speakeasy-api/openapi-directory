package operations

import (
	"openapi/pkg/models/shared"
)

type DetectImagePathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type DetectImageQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type DetectImageRequestBodyImageData struct {
	Content   []byte `multipartForm:"content"`
	ImageData string `multipartForm:"name=imageData"`
}

type DetectImageRequestBody struct {
	ImageData DetectImageRequestBodyImageData `multipartForm:"file"`
}

type DetectImageRequest struct {
	PathParams  DetectImagePathParams
	QueryParams DetectImageQueryParams
	Request     DetectImageRequestBody `request:"mediaType=multipart/form-data"`
}

type DetectImageResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
