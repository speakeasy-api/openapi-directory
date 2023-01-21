package shared

type Links struct {
	Next *string `json:"next,omitempty"`
	Prev *string `json:"prev,omitempty"`
	Self string  `json:"self"`
}
