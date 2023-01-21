package shared

type Dashboards struct {
	Dashboards []Dashboard `json:"dashboards,omitempty"`
	Links      *Links      `json:"links,omitempty"`
}
