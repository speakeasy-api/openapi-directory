package operations

import (
	"openapi/pkg/models/shared"
)

type DetectImageWithNoStorePathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type DetectImageWithNoStoreQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type DetectImageWithNoStoreRequestBodyImageData struct {
	Content   []byte `multipartForm:"content"`
	ImageData string `multipartForm:"name=imageData"`
}

type DetectImageWithNoStoreRequestBody struct {
	ImageData DetectImageWithNoStoreRequestBodyImageData `multipartForm:"file"`
}

type DetectImageWithNoStoreRequest struct {
	PathParams  DetectImageWithNoStorePathParams
	QueryParams DetectImageWithNoStoreQueryParams
	Request     DetectImageWithNoStoreRequestBody `request:"mediaType=multipart/form-data"`
}

type DetectImageWithNoStoreResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
