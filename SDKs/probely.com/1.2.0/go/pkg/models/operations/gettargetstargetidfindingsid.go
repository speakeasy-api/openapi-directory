package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDFindingsIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDFindingsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDRequest struct {
	PathParams GetTargetsTargetIDFindingsIDPathParams
}

type GetTargetsTargetIDFindingsIDResponse struct {
	ContentType                                          string
	Finding                                              *shared.Finding
	StatusCode                                           int64
	GetTargetsTargetIDFindingsID401ApplicationJSONObject *GetTargetsTargetIDFindingsID401ApplicationJSON
	GetTargetsTargetIDFindingsID404ApplicationJSONObject *GetTargetsTargetIDFindingsID404ApplicationJSON
}
