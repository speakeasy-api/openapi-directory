package shared

// OptionStatement
// A single variable declaration
type OptionStatement struct {
	Assignment *interface{} `json:"assignment,omitempty"`
	Type       *string      `json:"type,omitempty"`
}
