package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDFindingsIDRetestPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDFindingsIDRetest401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsIDRetest403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsIDRetest404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsIDRetestRequest struct {
	PathParams PostTargetsTargetIDFindingsIDRetestPathParams
}

type PostTargetsTargetIDFindingsIDRetestResponse struct {
	ContentType                                                 string
	Scan                                                        *shared.Scan
	StatusCode                                                  int64
	PostTargetsTargetIDFindingsIDRetest401ApplicationJSONObject *PostTargetsTargetIDFindingsIDRetest401ApplicationJSON
	PostTargetsTargetIDFindingsIDRetest403ApplicationJSONObject *PostTargetsTargetIDFindingsIDRetest403ApplicationJSON
	PostTargetsTargetIDFindingsIDRetest404ApplicationJSONObject *PostTargetsTargetIDFindingsIDRetest404ApplicationJSON
}
