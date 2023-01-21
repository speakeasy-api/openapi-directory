package shared

// CatalogQuerySet
// The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
// the `attribute_values`.
type CatalogQuerySet struct {
	AttributeName   string   `json:"attribute_name"`
	AttributeValues []string `json:"attribute_values"`
}
