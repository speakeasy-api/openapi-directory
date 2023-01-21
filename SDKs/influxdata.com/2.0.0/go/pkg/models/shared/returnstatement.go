package shared

// ReturnStatement
// Defines an expression to return
type ReturnStatement struct {
	Argument *interface{} `json:"argument,omitempty"`
	Type     *string      `json:"type,omitempty"`
}
