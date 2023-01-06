package shared

// EditorialLivefeedList
// List of editorial livefeeds
type EditorialLivefeedList struct {
	Data       []EditorialLivefeed `json:"data"`
	Message    *string             `json:"message,omitempty"`
	Page       *int64              `json:"page,omitempty"`
	PerPage    *int64              `json:"per_page,omitempty"`
	TotalCount int64               `json:"total_count"`
}
