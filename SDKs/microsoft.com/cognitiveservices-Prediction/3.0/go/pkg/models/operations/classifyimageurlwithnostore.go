package operations

import (
	"openapi/pkg/models/shared"
)

type ClassifyImageURLWithNoStorePathParams struct {
	ProjectID     string `pathParam:"style=simple,explode=false,name=projectId"`
	PublishedName string `pathParam:"style=simple,explode=false,name=publishedName"`
}

type ClassifyImageURLWithNoStoreQueryParams struct {
	Application *string `queryParam:"style=form,explode=true,name=application"`
}

type ClassifyImageURLWithNoStoreRequests struct {
	ApplicationXML []byte           `request:"mediaType=application/xml"`
	ImageURL       *shared.ImageURL `request:"mediaType=application/json"`
	ImageUrl1      *shared.ImageURL `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML        []byte           `request:"mediaType=text/xml"`
}

type ClassifyImageURLWithNoStoreRequest struct {
	PathParams  ClassifyImageURLWithNoStorePathParams
	QueryParams ClassifyImageURLWithNoStoreQueryParams
	Request     ClassifyImageURLWithNoStoreRequests
}

type ClassifyImageURLWithNoStoreResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	ImagePrediction   *shared.ImagePrediction
	StatusCode        int64
}
