package shared

type SourcesLinks struct {
	Self *string `json:"self,omitempty"`
}

type Sources struct {
	Links   *SourcesLinks `json:"links,omitempty"`
	Sources []Source      `json:"sources,omitempty"`
}
