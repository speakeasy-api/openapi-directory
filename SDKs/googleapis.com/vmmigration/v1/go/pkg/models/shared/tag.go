package shared

// Tag
// Tag is an AWS tag representation.
type Tag struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
