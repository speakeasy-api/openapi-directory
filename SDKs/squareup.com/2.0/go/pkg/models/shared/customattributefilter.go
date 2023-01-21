package shared

// CustomAttributeFilter
// Supported custom attribute query expressions for calling the
// [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
// endpoint to search for items or item variations.
type CustomAttributeFilter struct {
	BoolFilter                  *bool    `json:"bool_filter,omitempty"`
	CustomAttributeDefinitionID *string  `json:"custom_attribute_definition_id,omitempty"`
	Key                         *string  `json:"key,omitempty"`
	NumberFilter                *Range   `json:"number_filter,omitempty"`
	SelectionUidsFilter         []string `json:"selection_uids_filter,omitempty"`
	StringFilter                *string  `json:"string_filter,omitempty"`
}
