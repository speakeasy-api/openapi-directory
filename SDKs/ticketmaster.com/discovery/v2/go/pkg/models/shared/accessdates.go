package shared

import (
	"time"
)

// AccessDates
// Event's Access Date
type AccessDates struct {
	EndApproximate   *bool
	EndDateTime      *time.Time
	StartApproximate *bool
	StartDateTime    *time.Time
}
