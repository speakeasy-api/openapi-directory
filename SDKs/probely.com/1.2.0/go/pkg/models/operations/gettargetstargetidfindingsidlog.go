package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDFindingsIDLogPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDFindingsIDLog401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDLog404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDLogRequest struct {
	PathParams GetTargetsTargetIDFindingsIDLogPathParams
}

type GetTargetsTargetIDFindingsIDLogResponse struct {
	Activities                                              []shared.Activity
	ContentType                                             string
	StatusCode                                              int64
	GetTargetsTargetIDFindingsIDLog401ApplicationJSONObject *GetTargetsTargetIDFindingsIDLog401ApplicationJSON
	GetTargetsTargetIDFindingsIDLog404ApplicationJSONObject *GetTargetsTargetIDFindingsIDLog404ApplicationJSON
}
