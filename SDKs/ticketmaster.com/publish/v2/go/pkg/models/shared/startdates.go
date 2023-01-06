package shared

import (
	"time"
)

// StartDates
// Event's Start Dates
type StartDates struct {
	DateTBA        *bool      `json:"dateTBA,omitempty"`
	DateTBD        *bool      `json:"dateTBD,omitempty"`
	DateTime       *time.Time `json:"dateTime,omitempty"`
	LocalDate      *time.Time `json:"localDate,omitempty"`
	LocalTime      *LocalTime `json:"localTime,omitempty"`
	NoSpecificTime *bool      `json:"noSpecificTime,omitempty"`
	TimeTBA        *bool      `json:"timeTBA,omitempty"`
}
