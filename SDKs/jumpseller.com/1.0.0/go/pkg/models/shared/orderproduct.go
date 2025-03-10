// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type OrderProduct struct {
	// Discount of the Order Product
	Discount *float32 `json:"discount,omitempty"`
	// Unique identifier of the original Product
	ID *int `json:"id,omitempty"`
	// Image URL of the Order Product
	Image *string `json:"image,omitempty"`
	// Name of the Order Product
	Name *string `json:"name,omitempty"`
	// Price of the Order Product
	Price *float32 `json:"price,omitempty"`
	// Price of the Order Product
	Qty *int `json:"qty,omitempty"`
	// Stock Keeping Unit of the Order Product
	Sku   *string           `json:"sku,omitempty"`
	Taxes []OrderProductTax `json:"taxes,omitempty"`
	// Unique identifier of the original Product Variant
	VariantID *int `json:"variant_id,omitempty"`
	// Weight of the Order Product
	Weight *float32 `json:"weight,omitempty"`
}
