package operations

import (
	"openapi/pkg/models/shared"
)

type DetectImageURLPathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type DetectImageURLQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type DetectImageURLRequests struct {
	ApplicationXML []byte           `request:"mediaType=application/xml"`
	ImageURL       *shared.ImageURL `request:"mediaType=application/json"`
	ImageUrl1      *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML        []byte           `request:"mediaType=text/xml"`
}

type DetectImageURLRequest struct {
	PathParams  DetectImageURLPathParams
	QueryParams DetectImageURLQueryParams
	Request     DetectImageURLRequests
}

type DetectImageURLResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
