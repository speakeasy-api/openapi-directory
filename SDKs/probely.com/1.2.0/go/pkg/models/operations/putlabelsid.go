package operations

import (
	"openapi/pkg/models/shared"
)

type PutLabelsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutLabelsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutLabelsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutLabelsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutLabelsIDRequest struct {
	PathParams PutLabelsIDPathParams
	Request    shared.LabelInput `request:"mediaType=application/json"`
}

type PutLabelsIDResponse struct {
	ContentType                         string
	Label                               *shared.Label
	StatusCode                          int64
	PutLabelsID400ApplicationJSONObject *PutLabelsID400ApplicationJSON
	PutLabelsID401ApplicationJSONObject *PutLabelsID401ApplicationJSON
	PutLabelsID404ApplicationJSONObject *PutLabelsID404ApplicationJSON
}
