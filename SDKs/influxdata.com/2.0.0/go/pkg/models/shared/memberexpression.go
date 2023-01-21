package shared

// MemberExpression
// Represents accessing a property of an object
type MemberExpression struct {
	Object   *interface{} `json:"object,omitempty"`
	Property *interface{} `json:"property,omitempty"`
	Type     *string      `json:"type,omitempty"`
}
