package shared

import (
	"time"
)

// EndDates
// Event's End Dates
type EndDates struct {
	Approximate    *bool
	DateTime       *time.Time
	LocalDate      *time.Time
	LocalTime      *LocalTime
	NoSpecificTime *bool
}
