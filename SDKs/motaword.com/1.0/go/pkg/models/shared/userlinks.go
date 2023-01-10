package shared

type UserLinks struct {
	Projects     *Href `json:"projects,omitempty"`
	Responsivity *Href `json:"responsivity,omitempty"`
	Self         *Href `json:"self,omitempty"`
	Stats        *Href `json:"stats,omitempty"`
}
