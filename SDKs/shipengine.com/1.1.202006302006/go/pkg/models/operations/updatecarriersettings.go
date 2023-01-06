package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCarrierSettingsPathParams struct {
	CarrierID   string                             `pathParam:"style=simple,explode=false,name=carrier_id"`
	CarrierName shared.CarrierNameWithSettingsEnum `pathParam:"style=simple,explode=false,name=carrier_name"`
}

type UpdateCarrierSettingsRequest struct {
	PathParams UpdateCarrierSettingsPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpdateCarrierSettingsResponse struct {
	ContentType       string
	StatusCode        int64
	EmptyResponseBody *string
	ErrorResponseBody *shared.ErrorResponseBody
}
