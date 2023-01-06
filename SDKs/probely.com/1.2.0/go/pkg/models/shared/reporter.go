package shared

// Reporter
// Reporting user
type Reporter struct {
	Email *string `json:"email,omitempty"`
	ID    *string `json:"id,omitempty"`
	Name  *string `json:"name,omitempty"`
}
