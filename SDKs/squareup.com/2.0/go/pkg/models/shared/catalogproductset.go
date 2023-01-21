package shared

// CatalogProductSet
// Represents a collection of catalog objects for the purpose of applying a
// `PricingRule`. Including a catalog object will include all of its subtypes.
// For example, including a category in a product set will include all of its
// items and associated item variations in the product set. Including an item in
// a product set will also include its item variations.
type CatalogProductSet struct {
	AllProducts   *bool    `json:"all_products,omitempty"`
	Name          *string  `json:"name,omitempty"`
	ProductIdsAll []string `json:"product_ids_all,omitempty"`
	ProductIdsAny []string `json:"product_ids_any,omitempty"`
	QuantityExact *int64   `json:"quantity_exact,omitempty"`
	QuantityMax   *int64   `json:"quantity_max,omitempty"`
	QuantityMin   *int64   `json:"quantity_min,omitempty"`
}
