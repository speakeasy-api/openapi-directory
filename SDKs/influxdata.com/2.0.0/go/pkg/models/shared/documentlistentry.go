package shared

type DocumentListEntryLinks struct {
	Self *string `json:"self,omitempty"`
}

type DocumentListEntry struct {
	ID     string                  `json:"id"`
	Labels []Label                 `json:"labels,omitempty"`
	Links  *DocumentListEntryLinks `json:"links,omitempty"`
	Meta   DocumentMeta            `json:"meta"`
}
