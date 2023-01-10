package shared

type ProgressLink struct {
	Project *Href `json:"project,omitempty"`
	Self    *Href `json:"self,omitempty"`
}
