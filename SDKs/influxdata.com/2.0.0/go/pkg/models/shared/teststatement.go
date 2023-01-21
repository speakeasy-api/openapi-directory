package shared

// TestStatement
// Declares a Flux test case
type TestStatement struct {
	Assignment *VariableAssignment `json:"assignment,omitempty"`
	Type       *string             `json:"type,omitempty"`
}
