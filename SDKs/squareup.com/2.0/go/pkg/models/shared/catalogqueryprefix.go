package shared

// CatalogQueryPrefix
// The query filter to return the search result whose named attribute values are prefixed by the specified attribute value.
type CatalogQueryPrefix struct {
	AttributeName   string `json:"attribute_name"`
	AttributePrefix string `json:"attribute_prefix"`
}
