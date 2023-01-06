package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDScansIDCancelPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDScansIDCancel401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScansIDCancel403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScansIDCancel404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScansIDCancelRequest struct {
	PathParams PostTargetsTargetIDScansIDCancelPathParams
}

type PostTargetsTargetIDScansIDCancelResponse struct {
	ContentType                                              string
	Scan                                                     *shared.Scan
	StatusCode                                               int64
	PostTargetsTargetIDScansIDCancel401ApplicationJSONObject *PostTargetsTargetIDScansIDCancel401ApplicationJSON
	PostTargetsTargetIDScansIDCancel403ApplicationJSONObject *PostTargetsTargetIDScansIDCancel403ApplicationJSON
	PostTargetsTargetIDScansIDCancel404ApplicationJSONObject *PostTargetsTargetIDScansIDCancel404ApplicationJSON
}
