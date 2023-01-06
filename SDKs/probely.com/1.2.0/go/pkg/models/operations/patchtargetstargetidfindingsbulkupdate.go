package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDFindingsBulkUpdatePathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDFindingsBulkUpdate400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsTargetIDFindingsBulkUpdate401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsBulkUpdate404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsBulkUpdateRequest struct {
	PathParams PatchTargetsTargetIDFindingsBulkUpdatePathParams
	Request    shared.FindingBulkUpdateInput `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDFindingsBulkUpdateResponse struct {
	ContentType                                                    string
	StatusCode                                                     int64
	PatchTargetsTargetIDFindingsBulkUpdate400ApplicationJSONObject *PatchTargetsTargetIDFindingsBulkUpdate400ApplicationJSON
	PatchTargetsTargetIDFindingsBulkUpdate401ApplicationJSONObject *PatchTargetsTargetIDFindingsBulkUpdate401ApplicationJSON
	PatchTargetsTargetIDFindingsBulkUpdate404ApplicationJSONObject *PatchTargetsTargetIDFindingsBulkUpdate404ApplicationJSON
}
