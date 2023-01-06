package shared

// AudioSearchResults
// Audio search results
type AudioSearchResults struct {
	Data       []Audio `json:"data"`
	Message    *string `json:"message,omitempty"`
	Page       *int64  `json:"page,omitempty"`
	PerPage    *int64  `json:"per_page,omitempty"`
	SearchID   string  `json:"search_id"`
	TotalCount int64   `json:"total_count"`
}
