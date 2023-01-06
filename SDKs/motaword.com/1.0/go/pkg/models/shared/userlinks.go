package shared

type UserLinks struct {
	Projects     *Href `json:"projects,omitempty"`
	Responsivity *Href `json:"responsivity,omitempty"`
	Stats        *Href `json:"stats,omitempty"`
}
