package shared

type LabelsResponse struct {
	Labels []Label `json:"labels,omitempty"`
	Links  *Links  `json:"links,omitempty"`
}
