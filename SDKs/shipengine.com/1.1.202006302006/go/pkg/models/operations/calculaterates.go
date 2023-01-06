package operations

import (
	"openapi/pkg/models/shared"
)

type CalculateRatesRequest struct {
	Request shared.CalculateRatesRequestBody `request:"mediaType=application/json"`
}

type CalculateRatesResponse struct {
	ContentType                string
	StatusCode                 int64
	CalculateRatesResponseBody *shared.CalculateRatesResponseBody
	ErrorResponseBody          *shared.ErrorResponseBody
}
