package shared

// Range
// The range of a number value between the specified lower and upper bounds.
type Range struct {
	Max *string `json:"max,omitempty"`
	Min *string `json:"min,omitempty"`
}
