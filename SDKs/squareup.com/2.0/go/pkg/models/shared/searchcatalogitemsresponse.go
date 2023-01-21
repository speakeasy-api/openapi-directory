package shared

// SearchCatalogItemsResponse
// Defines the response body returned from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
type SearchCatalogItemsResponse struct {
	Cursor              *string         `json:"cursor,omitempty"`
	Errors              []Error         `json:"errors,omitempty"`
	Items               []CatalogObject `json:"items,omitempty"`
	MatchedVariationIds []string        `json:"matched_variation_ids,omitempty"`
}
