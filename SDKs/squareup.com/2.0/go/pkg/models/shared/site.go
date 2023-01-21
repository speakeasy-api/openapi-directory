package shared

// Site
// Represents a Square Online site, which is an online store for a Square seller.
type Site struct {
	CreatedAt   *string `json:"created_at,omitempty"`
	Domain      *string `json:"domain,omitempty"`
	ID          *string `json:"id,omitempty"`
	IsPublished *bool   `json:"is_published,omitempty"`
	SiteTitle   *string `json:"site_title,omitempty"`
	UpdatedAt   *string `json:"updated_at,omitempty"`
}
