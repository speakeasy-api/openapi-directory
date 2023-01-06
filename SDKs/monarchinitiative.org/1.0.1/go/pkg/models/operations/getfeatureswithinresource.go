package operations

import (
	"openapi/pkg/models/shared"
)

type GetFeaturesWithinResourcePathParams struct {
	Begin     string `pathParam:"style=simple,explode=false,name=begin"`
	Build     string `pathParam:"style=simple,explode=false,name=build"`
	End       string `pathParam:"style=simple,explode=false,name=end"`
	Reference string `pathParam:"style=simple,explode=false,name=reference"`
}

type GetFeaturesWithinResourceRequest struct {
	PathParams GetFeaturesWithinResourcePathParams
}

type GetFeaturesWithinResourceResponse struct {
	ContentType      string
	SequenceFeatures []shared.SequenceFeature
	StatusCode       int64
}
