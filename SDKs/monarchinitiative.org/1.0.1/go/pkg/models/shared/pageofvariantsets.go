package shared

type PageOfVariantSets struct {
	Items   []VariantSet `json:"items,omitempty"`
	Page    *int64       `json:"page,omitempty"`
	Pages   *int64       `json:"pages,omitempty"`
	PerPage *int64       `json:"per_page,omitempty"`
	Total   *int64       `json:"total,omitempty"`
}
