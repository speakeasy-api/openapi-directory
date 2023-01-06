package shared

type MetaUsers struct {
	Collection []MetaUser `json:"collection,omitempty"`
	NextHref   *string    `json:"next_href,omitempty"`
}
