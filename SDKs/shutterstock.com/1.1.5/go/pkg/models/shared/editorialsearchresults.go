package shared

// EditorialSearchResults
// Editorial search results
type EditorialSearchResults struct {
	Data       []EditorialContent `json:"data"`
	Message    *string            `json:"message,omitempty"`
	Next       *string            `json:"next,omitempty"`
	Page       *int64             `json:"page,omitempty"`
	PerPage    *int64             `json:"per_page,omitempty"`
	Prev       *string            `json:"prev,omitempty"`
	SearchID   *string            `json:"search_id,omitempty"`
	TotalCount int64              `json:"total_count"`
}
