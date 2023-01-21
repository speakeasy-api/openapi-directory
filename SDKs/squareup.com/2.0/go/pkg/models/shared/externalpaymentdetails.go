package shared

// ExternalPaymentDetails
// Stores details about an external payment. Contains only non-confidential information.
// For more information, see
// [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
type ExternalPaymentDetails struct {
	Source         string  `json:"source"`
	SourceFeeMoney *Money  `json:"source_fee_money,omitempty"`
	SourceID       *string `json:"source_id,omitempty"`
	Type           string  `json:"type"`
}
