package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchTargetsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsIDRequest struct {
	PathParams PatchTargetsIDPathParams
	Request    *shared.TargetInput `request:"mediaType=application/json"`
}

type PatchTargetsIDResponse struct {
	ContentType                            string
	StatusCode                             int64
	Target                                 *shared.Target
	PatchTargetsID400ApplicationJSONObject *PatchTargetsID400ApplicationJSON
	PatchTargetsID401ApplicationJSONObject *PatchTargetsID401ApplicationJSON
	PatchTargetsID403ApplicationJSONObject *PatchTargetsID403ApplicationJSON
	PatchTargetsID404ApplicationJSONObject *PatchTargetsID404ApplicationJSON
}
