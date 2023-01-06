package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PatchTargetsTargetIDScheduledscansIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDScheduledscansIDRequestBody struct {
	DateTime   time.Time              `json:"date_time"`
	Recurrence *shared.RecurrenceEnum `json:"recurrence,omitempty"`
}

type PatchTargetsTargetIDScheduledscansID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsTargetIDScheduledscansID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDScheduledscansID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDScheduledscansID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDScheduledscansIDRequest struct {
	PathParams PatchTargetsTargetIDScheduledscansIDPathParams
	Request    PatchTargetsTargetIDScheduledscansIDRequestBody `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDScheduledscansIDResponse struct {
	ContentType                                                  string
	Scheduled                                                    *shared.Scheduled
	StatusCode                                                   int64
	PatchTargetsTargetIDScheduledscansID400ApplicationJSONObject *PatchTargetsTargetIDScheduledscansID400ApplicationJSON
	PatchTargetsTargetIDScheduledscansID401ApplicationJSONObject *PatchTargetsTargetIDScheduledscansID401ApplicationJSON
	PatchTargetsTargetIDScheduledscansID403ApplicationJSONObject *PatchTargetsTargetIDScheduledscansID403ApplicationJSON
	PatchTargetsTargetIDScheduledscansID404ApplicationJSONObject *PatchTargetsTargetIDScheduledscansID404ApplicationJSON
}
