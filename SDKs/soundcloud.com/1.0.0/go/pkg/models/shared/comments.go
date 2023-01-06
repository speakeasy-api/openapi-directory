package shared

type Comments struct {
	Collection []Comment `json:"collection,omitempty"`
	NextHref   *string   `json:"next_href,omitempty"`
}
