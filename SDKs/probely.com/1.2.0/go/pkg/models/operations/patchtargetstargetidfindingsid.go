package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDFindingsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDFindingsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsTargetIDFindingsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDRequest struct {
	PathParams PatchTargetsTargetIDFindingsIDPathParams
	Request    shared.FindingUpdateInput `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDFindingsIDResponse struct {
	ContentType                                            string
	Finding                                                *shared.Finding
	StatusCode                                             int64
	PatchTargetsTargetIDFindingsID400ApplicationJSONObject *PatchTargetsTargetIDFindingsID400ApplicationJSON
	PatchTargetsTargetIDFindingsID401ApplicationJSONObject *PatchTargetsTargetIDFindingsID401ApplicationJSON
	PatchTargetsTargetIDFindingsID403ApplicationJSONObject *PatchTargetsTargetIDFindingsID403ApplicationJSON
	PatchTargetsTargetIDFindingsID404ApplicationJSONObject *PatchTargetsTargetIDFindingsID404ApplicationJSON
}
