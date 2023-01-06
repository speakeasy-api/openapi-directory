package shared

import (
	"time"
)

// Presale
// Event's Presale Info
type Presale struct {
	Description   *string
	EndDateTime   *time.Time
	Name          *string
	StartDateTime *time.Time
	URL           *string
}
