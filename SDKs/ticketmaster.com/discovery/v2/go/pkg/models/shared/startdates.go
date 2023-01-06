package shared

import (
	"time"
)

// StartDates
// Event's Start Dates
type StartDates struct {
	DateTBA        *bool
	DateTBD        *bool
	DateTime       *time.Time
	LocalDate      *time.Time
	LocalTime      *LocalTime
	NoSpecificTime *bool
	TimeTBA        *bool
}
