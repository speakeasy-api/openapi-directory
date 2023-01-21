package shared

// SearchCatalogItemsRequest
// Defines the request body for the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
type SearchCatalogItemsRequest struct {
	CategoryIds            []string                `json:"category_ids,omitempty"`
	Cursor                 *string                 `json:"cursor,omitempty"`
	CustomAttributeFilters []CustomAttributeFilter `json:"custom_attribute_filters,omitempty"`
	EnabledLocationIds     []string                `json:"enabled_location_ids,omitempty"`
	Limit                  *int64                  `json:"limit,omitempty"`
	ProductTypes           []string                `json:"product_types,omitempty"`
	SortOrder              *string                 `json:"sort_order,omitempty"`
	StockLevels            []string                `json:"stock_levels,omitempty"`
	TextFilter             *string                 `json:"text_filter,omitempty"`
}
