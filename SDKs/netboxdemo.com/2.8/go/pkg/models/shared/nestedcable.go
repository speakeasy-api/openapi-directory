package shared

type NestedCable struct {
	ID    *int64  `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	URL   *string `json:"url,omitempty"`
}

type NestedCableInput struct {
	Label *string `json:"label,omitempty"`
}
