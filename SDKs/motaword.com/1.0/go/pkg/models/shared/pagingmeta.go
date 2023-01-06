package shared

type PagingMetaPaging struct {
	Links      *PagingLinksMeta `json:"links,omitempty"`
	Page       *int64           `json:"page,omitempty"`
	PerPage    *int64           `json:"per_page,omitempty"`
	TotalCount *int64           `json:"total_count,omitempty"`
}

type PagingMeta struct {
	Paging *PagingMetaPaging `json:"paging,omitempty"`
}
