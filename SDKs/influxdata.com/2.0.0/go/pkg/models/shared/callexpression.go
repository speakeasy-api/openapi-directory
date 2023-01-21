package shared

// CallExpression
// Represents a function call
type CallExpression struct {
	Arguments []interface{} `json:"arguments,omitempty"`
	Callee    *interface{}  `json:"callee,omitempty"`
	Type      *string       `json:"type,omitempty"`
}
