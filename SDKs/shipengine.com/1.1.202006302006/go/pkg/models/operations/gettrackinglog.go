package operations

import (
	"openapi/pkg/models/shared"
)

type GetTrackingLogQueryParams struct {
	CarrierCode    *string `queryParam:"style=form,explode=true,name=carrier_code"`
	TrackingNumber *string `queryParam:"style=form,explode=true,name=tracking_number"`
}

type GetTrackingLogRequest struct {
	QueryParams GetTrackingLogQueryParams
}

type GetTrackingLogResponse struct {
	ContentType                string
	StatusCode                 int64
	ErrorResponseBody          *shared.ErrorResponseBody
	GetTrackingLogResponseBody *shared.GetTrackingLogResponseBody
}
