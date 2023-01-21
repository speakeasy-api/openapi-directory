package shared

// CatalogStockConversion
// Represents the rule of conversion between a stockable [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
// and a non-stockable sell-by or receive-by `CatalogItemVariation` that
// share the same underlying stock.
type CatalogStockConversion struct {
	NonstockableQuantity     string `json:"nonstockable_quantity"`
	StockableItemVariationID string `json:"stockable_item_variation_id"`
	StockableQuantity        string `json:"stockable_quantity"`
}
