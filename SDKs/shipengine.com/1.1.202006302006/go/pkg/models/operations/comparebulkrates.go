package operations

import (
	"openapi/pkg/models/shared"
)

type CompareBulkRatesRequest struct {
	Request shared.CompareBulkRatesRequestBody `request:"mediaType=application/json"`
}

type CompareBulkRatesResponse struct {
	ContentType                  string
	StatusCode                   int64
	CompareBulkRatesResponseBody []shared.BulkRate
	ErrorResponseBody            *shared.ErrorResponseBody
}
