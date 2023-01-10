package shared

type ActivityLinks struct {
	Comments *Href `json:"comments,omitempty"`
	Project  *Href `json:"project,omitempty"`
	Self     *Href `json:"self,omitempty"`
}
