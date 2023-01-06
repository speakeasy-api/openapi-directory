package operations

import (
	"openapi/pkg/models/shared"
)

type EstimateRatesRequest struct {
	Request shared.EstimateRatesRequestBody `request:"mediaType=application/json"`
}

type EstimateRatesResponse struct {
	ContentType               string
	StatusCode                int64
	ErrorResponseBody         *shared.ErrorResponseBody
	EstimateRatesResponseBody []shared.Rate
}
