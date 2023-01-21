package shared

// CatalogQuerySortedAttribute
// The query expression to specify the key to sort search results.
type CatalogQuerySortedAttribute struct {
	AttributeName         string  `json:"attribute_name"`
	InitialAttributeValue *string `json:"initial_attribute_value,omitempty"`
	SortOrder             *string `json:"sort_order,omitempty"`
}
