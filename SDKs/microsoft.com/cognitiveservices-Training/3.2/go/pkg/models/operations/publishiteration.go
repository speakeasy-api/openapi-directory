package operations

import (
	"openapi/pkg/models/shared"
)

type PublishIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type PublishIterationQueryParams struct {
	PredictionID string `queryParam:"style=form,explode=true,name=predictionId"`
	PublishName  string `queryParam:"style=form,explode=true,name=publishName"`
}

type PublishIterationRequest struct {
	PathParams  PublishIterationPathParams
	QueryParams PublishIterationQueryParams
}

type PublishIterationResponse struct {
	Body                                      []byte
	ContentType                               string
	CustomVisionError                         *shared.CustomVisionError
	PublishIteration200ApplicationJSONBoolean *bool
	StatusCode                                int64
}
