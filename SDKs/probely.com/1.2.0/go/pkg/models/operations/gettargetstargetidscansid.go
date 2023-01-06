package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDScansIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDRequest struct {
	PathParams GetTargetsTargetIDScansIDPathParams
}

type GetTargetsTargetIDScansIDResponse struct {
	ContentType                                       string
	Scan                                              *shared.Scan
	StatusCode                                        int64
	GetTargetsTargetIDScansID401ApplicationJSONObject *GetTargetsTargetIDScansID401ApplicationJSON
	GetTargetsTargetIDScansID404ApplicationJSONObject *GetTargetsTargetIDScansID404ApplicationJSON
}
