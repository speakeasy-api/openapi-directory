package shared

type Users struct {
	Collection []User  `json:"collection,omitempty"`
	NextHref   *string `json:"next_href,omitempty"`
}
