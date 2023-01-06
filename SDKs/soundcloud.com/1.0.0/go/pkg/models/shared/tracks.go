package shared

type Tracks struct {
	Collection []Track `json:"collection,omitempty"`
	NextHref   *string `json:"next_href,omitempty"`
}
