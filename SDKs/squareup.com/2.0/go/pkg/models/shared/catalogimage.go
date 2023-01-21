package shared

// CatalogImage
// An image file to use in Square catalogs. It can be associated with catalog
// items, item variations, and categories.
type CatalogImage struct {
	Caption *string `json:"caption,omitempty"`
	Name    *string `json:"name,omitempty"`
	URL     *string `json:"url,omitempty"`
}
