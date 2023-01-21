package shared

// ArrayExpression
// Used to create and directly specify the elements of an array object
type ArrayExpression struct {
	Elements []interface{} `json:"elements,omitempty"`
	Type     *string       `json:"type,omitempty"`
}
