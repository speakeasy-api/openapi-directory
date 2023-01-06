package shared

import (
	"time"
)

// PublicSaleDates
// Event's Public Onsales Dates
type PublicSaleDates struct {
	EndDateTime   *time.Time
	StartDateTime *time.Time
	StartTBD      *bool
}
