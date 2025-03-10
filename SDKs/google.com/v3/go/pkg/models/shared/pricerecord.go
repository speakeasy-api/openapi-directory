// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// PriceRecord - A price record.
type PriceRecord struct {
	// Base price.
	BasePrice *float32 `json:"basePrice,omitempty"`
	// ISO 4217 currency code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Taxes and fees.
	TaxesAndFees *float32 `json:"taxesAndFees,omitempty"`
	// Timestamp of this price record.
	Time *string `json:"time,omitempty"`
}
