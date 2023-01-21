package shared

// PipeExpression
// Call expression with pipe argument
type PipeExpression struct {
	Argument *interface{}    `json:"argument,omitempty"`
	Call     *CallExpression `json:"call,omitempty"`
	Type     *string         `json:"type,omitempty"`
}
