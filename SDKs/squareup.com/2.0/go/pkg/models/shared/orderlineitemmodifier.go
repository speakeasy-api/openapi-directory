package shared

// OrderLineItemModifier
// A [CatalogModifier](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifier).
type OrderLineItemModifier struct {
	BasePriceMoney  *Money  `json:"base_price_money,omitempty"`
	CatalogObjectID *string `json:"catalog_object_id,omitempty"`
	CatalogVersion  *int64  `json:"catalog_version,omitempty"`
	Name            *string `json:"name,omitempty"`
	TotalPriceMoney *Money  `json:"total_price_money,omitempty"`
	UID             *string `json:"uid,omitempty"`
}
