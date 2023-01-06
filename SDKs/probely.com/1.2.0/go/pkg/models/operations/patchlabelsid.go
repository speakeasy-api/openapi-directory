package operations

import (
	"openapi/pkg/models/shared"
)

type PatchLabelsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchLabelsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchLabelsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchLabelsIDRequest struct {
	PathParams PatchLabelsIDPathParams
	Request    shared.LabelInput `request:"mediaType=application/json"`
}

type PatchLabelsIDResponse struct {
	ContentType                           string
	Label                                 *shared.Label
	StatusCode                            int64
	PatchLabelsID401ApplicationJSONObject *PatchLabelsID401ApplicationJSON
	PatchLabelsID404ApplicationJSONObject *PatchLabelsID404ApplicationJSON
}
