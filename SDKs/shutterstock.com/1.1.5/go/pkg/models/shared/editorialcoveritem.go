package shared

// EditorialCoverItem
// Cover image for editorial livefeed
type EditorialCoverItem struct {
	Height *int64 `json:"height,omitempty"`
	ID     string `json:"id"`
	URL    string `json:"url"`
	Width  *int64 `json:"width,omitempty"`
}
