package shared

// CatalogQueryRange
// The query filter to return the search result whose named attribute values fall between the specified range.
type CatalogQueryRange struct {
	AttributeMaxValue *int64 `json:"attribute_max_value,omitempty"`
	AttributeMinValue *int64 `json:"attribute_min_value,omitempty"`
	AttributeName     string `json:"attribute_name"`
}
