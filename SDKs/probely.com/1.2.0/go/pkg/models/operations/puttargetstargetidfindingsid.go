package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDFindingsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDFindingsID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutTargetsTargetIDFindingsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDRequest struct {
	PathParams PutTargetsTargetIDFindingsIDPathParams
	Request    shared.FindingUpdateInput `request:"mediaType=application/json"`
}

type PutTargetsTargetIDFindingsIDResponse struct {
	ContentType                                          string
	Finding                                              *shared.Finding
	StatusCode                                           int64
	PutTargetsTargetIDFindingsID400ApplicationJSONObject *PutTargetsTargetIDFindingsID400ApplicationJSON
	PutTargetsTargetIDFindingsID401ApplicationJSONObject *PutTargetsTargetIDFindingsID401ApplicationJSON
	PutTargetsTargetIDFindingsID403ApplicationJSONObject *PutTargetsTargetIDFindingsID403ApplicationJSON
	PutTargetsTargetIDFindingsID404ApplicationJSONObject *PutTargetsTargetIDFindingsID404ApplicationJSON
}
