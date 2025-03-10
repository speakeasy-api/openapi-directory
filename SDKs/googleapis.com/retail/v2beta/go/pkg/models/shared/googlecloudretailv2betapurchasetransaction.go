// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleCloudRetailV2betaPurchaseTransaction - A transaction represents the entire purchase transaction.
type GoogleCloudRetailV2betaPurchaseTransaction struct {
	// All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost
	Cost *float32 `json:"cost,omitempty"`
	// Required. Currency code. Use three-character ISO-4217 code.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// The transaction ID with a length limit of 128 characters.
	ID *string `json:"id,omitempty"`
	// Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations.
	Revenue *float32 `json:"revenue,omitempty"`
	// All the taxes associated with the transaction.
	Tax *float32 `json:"tax,omitempty"`
}
