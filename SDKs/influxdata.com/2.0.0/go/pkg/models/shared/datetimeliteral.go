package shared

import (
	"time"
)

// DateTimeLiteral
// Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant
type DateTimeLiteral struct {
	Type  *string    `json:"type,omitempty"`
	Value *time.Time `json:"value,omitempty"`
}
