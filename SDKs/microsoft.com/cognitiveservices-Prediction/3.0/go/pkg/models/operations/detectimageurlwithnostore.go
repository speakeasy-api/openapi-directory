package operations

import (
	"openapi/pkg/models/shared"
)

type DetectImageURLWithNoStorePathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type DetectImageURLWithNoStoreQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type DetectImageURLWithNoStoreRequests struct {
	ApplicationXML []byte           `request:"mediaType=application/xml"`
	ImageURL       *shared.ImageURL `request:"mediaType=application/json"`
	ImageUrl1      *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML        []byte           `request:"mediaType=text/xml"`
}

type DetectImageURLWithNoStoreRequest struct {
	PathParams  DetectImageURLWithNoStorePathParams
	QueryParams DetectImageURLWithNoStoreQueryParams
	Request     DetectImageURLWithNoStoreRequests
}

type DetectImageURLWithNoStoreResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
