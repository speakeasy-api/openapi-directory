package operations

import (
	"openapi/pkg/models/shared"
)

type GetCarrierSettingsPathParams struct {
	CarrierID   string                             `pathParam:"style=simple,explode=false,name=carrier_id"`
	CarrierName shared.CarrierNameWithSettingsEnum `pathParam:"style=simple,explode=false,name=carrier_name"`
}

type GetCarrierSettingsRequest struct {
	PathParams GetCarrierSettingsPathParams
}

type GetCarrierSettingsResponse struct {
	ContentType                    string
	StatusCode                     int64
	ErrorResponseBody              *shared.ErrorResponseBody
	GetCarrierSettingsResponseBody *interface{}
}
