package shared

type Tasks struct {
	Links *Links `json:"links,omitempty"`
	Tasks []Task `json:"tasks,omitempty"`
}
