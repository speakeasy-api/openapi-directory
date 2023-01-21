package shared

// IndexExpression
// Represents indexing into an array
type IndexExpression struct {
	Array *interface{} `json:"array,omitempty"`
	Index *interface{} `json:"index,omitempty"`
	Type  *string      `json:"type,omitempty"`
}
