package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostTargetsTargetIDScheduledscansPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDScheduledscansRequestBody struct {
	DateTime   time.Time              `json:"date_time"`
	Recurrence *shared.RecurrenceEnum `json:"recurrence,omitempty"`
}

type PostTargetsTargetIDScheduledscans400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsTargetIDScheduledscans401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScheduledscans403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScheduledscans404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDScheduledscansRequest struct {
	PathParams PostTargetsTargetIDScheduledscansPathParams
	Request    PostTargetsTargetIDScheduledscansRequestBody `request:"mediaType=application/json"`
}

type PostTargetsTargetIDScheduledscansResponse struct {
	ContentType                                               string
	Scheduled                                                 *shared.Scheduled
	StatusCode                                                int64
	PostTargetsTargetIDScheduledscans400ApplicationJSONObject *PostTargetsTargetIDScheduledscans400ApplicationJSON
	PostTargetsTargetIDScheduledscans401ApplicationJSONObject *PostTargetsTargetIDScheduledscans401ApplicationJSON
	PostTargetsTargetIDScheduledscans403ApplicationJSONObject *PostTargetsTargetIDScheduledscans403ApplicationJSON
	PostTargetsTargetIDScheduledscans404ApplicationJSONObject *PostTargetsTargetIDScheduledscans404ApplicationJSON
}
