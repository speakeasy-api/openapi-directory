package shared

// Property
// The value associated with a key
type Property struct {
	Key   *interface{} `json:"key,omitempty"`
	Type  *string      `json:"type,omitempty"`
	Value *interface{} `json:"value,omitempty"`
}
