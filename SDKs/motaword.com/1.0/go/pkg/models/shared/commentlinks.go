package shared

type CommentLinks struct {
	Activity *Href `json:"activity,omitempty"`
	Project  *Href `json:"project,omitempty"`
}
