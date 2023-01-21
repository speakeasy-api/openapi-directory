package shared

// Snippet
// Represents the snippet that is added to a Square Online site. The snippet code is injected into the `head` element of all pages on the site, except for checkout pages.
type Snippet struct {
	Content   string  `json:"content"`
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *string `json:"id,omitempty"`
	SiteID    *string `json:"site_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
