package shared

// FunctionExpression
// Function expression
type FunctionExpression struct {
	Body   *interface{} `json:"body,omitempty"`
	Params []Property   `json:"params,omitempty"`
	Type   *string      `json:"type,omitempty"`
}
