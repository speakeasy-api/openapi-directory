package shared

// VideoSearchResults
// Video search results
type VideoSearchResults struct {
	Data       []Video `json:"data"`
	Message    *string `json:"message,omitempty"`
	Page       *int64  `json:"page,omitempty"`
	PerPage    *int64  `json:"per_page,omitempty"`
	SearchID   string  `json:"search_id"`
	TotalCount int64   `json:"total_count"`
}
