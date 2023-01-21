package shared

// DurationLiteral
// Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration
type DurationLiteral struct {
	Type   *string    `json:"type,omitempty"`
	Values []Duration `json:"values,omitempty"`
}
