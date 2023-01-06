package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutTargetsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutTargetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsIDRequest struct {
	PathParams PutTargetsIDPathParams
	Request    *shared.TargetInput `request:"mediaType=application/json"`
}

type PutTargetsIDResponse struct {
	ContentType                          string
	StatusCode                           int64
	Target                               *shared.Target
	PutTargetsID400ApplicationJSONObject *PutTargetsID400ApplicationJSON
	PutTargetsID401ApplicationJSONObject *PutTargetsID401ApplicationJSON
	PutTargetsID403ApplicationJSONObject *PutTargetsID403ApplicationJSON
	PutTargetsID404ApplicationJSONObject *PutTargetsID404ApplicationJSON
}
