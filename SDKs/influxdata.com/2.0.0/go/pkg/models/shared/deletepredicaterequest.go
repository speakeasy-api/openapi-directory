package shared

import (
	"time"
)

// DeletePredicateRequest
// The delete predicate request.
type DeletePredicateRequest struct {
	Predicate *string   `json:"predicate,omitempty"`
	Start     time.Time `json:"start"`
	Stop      time.Time `json:"stop"`
}
