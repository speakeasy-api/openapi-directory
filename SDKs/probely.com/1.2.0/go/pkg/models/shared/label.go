package shared

type Label struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type LabelInput struct {
	Name *string `json:"name,omitempty"`
}
