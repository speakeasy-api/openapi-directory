package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDScheduledscansIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScheduledscansID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScheduledscansID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScheduledscansIDRequest struct {
	PathParams GetTargetsTargetIDScheduledscansIDPathParams
}

type GetTargetsTargetIDScheduledscansIDResponse struct {
	ContentType                                                string
	Scheduled                                                  *shared.Scheduled
	StatusCode                                                 int64
	GetTargetsTargetIDScheduledscansID401ApplicationJSONObject *GetTargetsTargetIDScheduledscansID401ApplicationJSON
	GetTargetsTargetIDScheduledscansID404ApplicationJSONObject *GetTargetsTargetIDScheduledscansID404ApplicationJSON
}
