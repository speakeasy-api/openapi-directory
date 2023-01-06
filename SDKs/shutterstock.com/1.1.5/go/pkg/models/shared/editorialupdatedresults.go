package shared

// EditorialUpdatedResults
// Editorial updated results
type EditorialUpdatedResults struct {
	Data    []EditorialUpdatedContent `json:"data"`
	Message *string                   `json:"message,omitempty"`
	Next    *string                   `json:"next,omitempty"`
	PerPage *int64                    `json:"per_page,omitempty"`
	Prev    *string                   `json:"prev,omitempty"`
}
