package shared

import (
	"time"
)

type Scheduled struct {
	Changed    *time.Time      `json:"changed,omitempty"`
	ChangedBy  *ChangedBy      `json:"changed_by,omitempty"`
	DateTime   *time.Time      `json:"date_time,omitempty"`
	ID         *string         `json:"id,omitempty"`
	Recurrence *RecurrenceEnum `json:"recurrence,omitempty"`
	Target     *TargetSimple   `json:"target,omitempty"`
}
