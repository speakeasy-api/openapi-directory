package shared

// CatalogQueryExact
// The query filter to return the search result by exact match of the specified attribute name and value.
type CatalogQueryExact struct {
	AttributeName  string `json:"attribute_name"`
	AttributeValue string `json:"attribute_value"`
}
