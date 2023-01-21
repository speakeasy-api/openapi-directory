package shared

// ObjectExpression
// Allows the declaration of an anonymous object within a declaration
type ObjectExpression struct {
	Properties []Property `json:"properties,omitempty"`
	Type       *string    `json:"type,omitempty"`
}
