package shared

type LabelResponse struct {
	Label *Label `json:"label,omitempty"`
	Links *Links `json:"links,omitempty"`
}
