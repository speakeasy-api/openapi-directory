package shared

type PagingLinksMeta struct {
	Next     *string `json:"next,omitempty"`
	Previous *string `json:"previous,omitempty"`
	Self     *Href   `json:"self,omitempty"`
}
