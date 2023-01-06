package shared

type SearchEverywhereResultResult struct {
	Documents []DocumentInSearch `json:"documents,omitempty"`
	Projects  []ProjectInSearch  `json:"projects,omitempty"`
	Strings   []StringInSearch   `json:"strings,omitempty"`
}

type SearchEverywhereResult struct {
	Meta   *PagingMeta                   `json:"meta,omitempty"`
	Result *SearchEverywhereResultResult `json:"result,omitempty"`
}
