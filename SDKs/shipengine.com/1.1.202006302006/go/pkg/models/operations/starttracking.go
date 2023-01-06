package operations

import (
	"openapi/pkg/models/shared"
)

type StartTrackingQueryParams struct {
	CarrierCode    *string `queryParam:"style=form,explode=true,name=carrier_code"`
	TrackingNumber *string `queryParam:"style=form,explode=true,name=tracking_number"`
}

type StartTrackingRequest struct {
	QueryParams StartTrackingQueryParams
}

type StartTrackingResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
