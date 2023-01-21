package shared

// CatalogQueryText
// The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case.
type CatalogQueryText struct {
	Keywords []string `json:"keywords"`
}
