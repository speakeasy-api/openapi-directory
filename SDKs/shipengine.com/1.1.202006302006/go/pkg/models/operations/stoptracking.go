package operations

import (
	"openapi/pkg/models/shared"
)

type StopTrackingQueryParams struct {
	CarrierCode    *string `queryParam:"style=form,explode=true,name=carrier_code"`
	TrackingNumber *string `queryParam:"style=form,explode=true,name=tracking_number"`
}

type StopTrackingRequest struct {
	QueryParams StopTrackingQueryParams
}

type StopTrackingResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
