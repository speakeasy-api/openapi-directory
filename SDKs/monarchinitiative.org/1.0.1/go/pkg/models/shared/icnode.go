package shared

type IcNode struct {
	IC    *float64 `json:"IC,omitempty"`
	ID    string   `json:"id"`
	Label *string  `json:"label,omitempty"`
}
