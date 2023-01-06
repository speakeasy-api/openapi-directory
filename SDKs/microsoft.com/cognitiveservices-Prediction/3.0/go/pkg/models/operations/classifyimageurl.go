package operations

import (
	"openapi/pkg/models/shared"
)

type ClassifyImageURLPathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type ClassifyImageURLQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type ClassifyImageURLRequests struct {
	ApplicationXML []byte           `request:"mediaType=application/xml"`
	ImageURL       *shared.ImageURL `request:"mediaType=application/json"`
	ImageUrl1      *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML        []byte           `request:"mediaType=text/xml"`
}

type ClassifyImageURLRequest struct {
	PathParams  ClassifyImageURLPathParams
	QueryParams ClassifyImageURLQueryParams
	Request     ClassifyImageURLRequests
}

type ClassifyImageURLResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
