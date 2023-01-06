package shared

import (
	"time"
)

// View
// Base model for all types
type View struct {
	ActiveMsecs *int64     `json:"active_msecs,omitempty"`
	Additional  *string    `json:"additional,omitempty"`
	EndTime     *time.Time `json:"end_time,omitempty"`
	PageNumber  *int64     `json:"page_number,omitempty"`
	SessionID   *string    `json:"session_id,omitempty"`
	StartTime   *time.Time `json:"start_time,omitempty"`
	TotalMsecs  *int64     `json:"total_msecs,omitempty"`
}
