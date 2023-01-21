package shared

type LabelUpdate struct {
	Name       *string           `json:"name,omitempty"`
	Properties map[string]string `json:"properties,omitempty"`
}
