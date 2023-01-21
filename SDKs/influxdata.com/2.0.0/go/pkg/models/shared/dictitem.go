package shared

// DictItem
// A key/value pair in a dictionary
type DictItem struct {
	Key  *interface{} `json:"key,omitempty"`
	Type *string      `json:"type,omitempty"`
	Val  *interface{} `json:"val,omitempty"`
}
