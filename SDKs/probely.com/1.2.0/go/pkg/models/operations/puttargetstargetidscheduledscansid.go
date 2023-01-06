package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PutTargetsTargetIDScheduledscansIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDScheduledscansIDRequestBody struct {
	DateTime   time.Time              `json:"date_time"`
	Recurrence *shared.RecurrenceEnum `json:"recurrence,omitempty"`
}

type PutTargetsTargetIDScheduledscansID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutTargetsTargetIDScheduledscansID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDScheduledscansID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDScheduledscansID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDScheduledscansIDRequest struct {
	PathParams PutTargetsTargetIDScheduledscansIDPathParams
	Request    PutTargetsTargetIDScheduledscansIDRequestBody `request:"mediaType=application/json"`
}

type PutTargetsTargetIDScheduledscansIDResponse struct {
	ContentType                                                string
	Scheduled                                                  *shared.Scheduled
	StatusCode                                                 int64
	PutTargetsTargetIDScheduledscansID400ApplicationJSONObject *PutTargetsTargetIDScheduledscansID400ApplicationJSON
	PutTargetsTargetIDScheduledscansID401ApplicationJSONObject *PutTargetsTargetIDScheduledscansID401ApplicationJSON
	PutTargetsTargetIDScheduledscansID403ApplicationJSONObject *PutTargetsTargetIDScheduledscansID403ApplicationJSON
	PutTargetsTargetIDScheduledscansID404ApplicationJSONObject *PutTargetsTargetIDScheduledscansID404ApplicationJSON
}
