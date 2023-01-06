package operations

import (
	"openapi/pkg/models/shared"
)

type ClassifyImageWithNoStorePathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type ClassifyImageWithNoStoreQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type ClassifyImageWithNoStoreRequestBodyImageData struct {
	Content   []byte `multipartForm:"content"`
	ImageData string `multipartForm:"name=imageData"`
}

type ClassifyImageWithNoStoreRequestBody struct {
	ImageData ClassifyImageWithNoStoreRequestBodyImageData `multipartForm:"file"`
}

type ClassifyImageWithNoStoreRequest struct {
	PathParams  ClassifyImageWithNoStorePathParams
	QueryParams ClassifyImageWithNoStoreQueryParams
	Request     ClassifyImageWithNoStoreRequestBody `request:"mediaType=multipart/form-data"`
}

type ClassifyImageWithNoStoreResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
