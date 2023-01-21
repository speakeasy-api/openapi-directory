package shared

import (
	"time"
)

type LogEvent struct {
	Message *string    `json:"message,omitempty"`
	RunID   *string    `json:"runID,omitempty"`
	Time    *time.Time `json:"time,omitempty"`
}
