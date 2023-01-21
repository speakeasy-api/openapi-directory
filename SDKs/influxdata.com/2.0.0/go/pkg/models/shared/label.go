package shared

type Label struct {
	ID         *string           `json:"id,omitempty"`
	Name       *string           `json:"name,omitempty"`
	OrgID      *string           `json:"orgID,omitempty"`
	Properties map[string]string `json:"properties,omitempty"`
}

type LabelInput struct {
	Name       *string           `json:"name,omitempty"`
	Properties map[string]string `json:"properties,omitempty"`
}
