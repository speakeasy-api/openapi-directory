package operations

import (
	"openapi/pkg/models/shared"
)

type GetLabelsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetLabelsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetLabelsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetLabelsIDRequest struct {
	PathParams GetLabelsIDPathParams
}

type GetLabelsIDResponse struct {
	ContentType                         string
	Label                               *shared.Label
	StatusCode                          int64
	GetLabelsID401ApplicationJSONObject *GetLabelsID401ApplicationJSON
	GetLabelsID404ApplicationJSONObject *GetLabelsID404ApplicationJSON
}
