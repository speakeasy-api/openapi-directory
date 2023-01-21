package shared

// Block
// A set of statements
type Block struct {
	Body []interface{} `json:"body,omitempty"`
	Type *string       `json:"type,omitempty"`
}
