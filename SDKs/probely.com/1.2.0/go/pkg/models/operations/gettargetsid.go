package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTargetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsID500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsIDRequest struct {
	PathParams GetTargetsIDPathParams
}

type GetTargetsIDResponse struct {
	ContentType                          string
	StatusCode                           int64
	Target                               *shared.Target
	GetTargetsID401ApplicationJSONObject *GetTargetsID401ApplicationJSON
	GetTargetsID404ApplicationJSONObject *GetTargetsID404ApplicationJSON
	GetTargetsID500ApplicationJSONObject *GetTargetsID500ApplicationJSON
}
