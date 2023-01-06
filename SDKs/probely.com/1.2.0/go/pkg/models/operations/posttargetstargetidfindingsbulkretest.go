package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDFindingsBulkRetestPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDFindingsBulkRetest400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostTargetsTargetIDFindingsBulkRetest401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsBulkRetest404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsBulkRetestRequest struct {
	PathParams PostTargetsTargetIDFindingsBulkRetestPathParams
	Request    shared.FindingBulkRetest `request:"mediaType=application/json"`
}

type PostTargetsTargetIDFindingsBulkRetestResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	PostTargetsTargetIDFindingsBulkRetest400ApplicationJSONObject *PostTargetsTargetIDFindingsBulkRetest400ApplicationJSON
	PostTargetsTargetIDFindingsBulkRetest401ApplicationJSONObject *PostTargetsTargetIDFindingsBulkRetest401ApplicationJSON
	PostTargetsTargetIDFindingsBulkRetest404ApplicationJSONObject *PostTargetsTargetIDFindingsBulkRetest404ApplicationJSON
}
