package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDFindingsBulkReportPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDFindingsBulkReport400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostTargetsTargetIDFindingsBulkReport401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsBulkReport404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDFindingsBulkReportRequest struct {
	PathParams PostTargetsTargetIDFindingsBulkReportPathParams
	Request    shared.FindingBulkIds `request:"mediaType=application/json"`
}

type PostTargetsTargetIDFindingsBulkReportResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	PostTargetsTargetIDFindingsBulkReport400ApplicationJSONObject *PostTargetsTargetIDFindingsBulkReport400ApplicationJSON
	PostTargetsTargetIDFindingsBulkReport401ApplicationJSONObject *PostTargetsTargetIDFindingsBulkReport401ApplicationJSON
	PostTargetsTargetIDFindingsBulkReport404ApplicationJSONObject *PostTargetsTargetIDFindingsBulkReport404ApplicationJSON
}
