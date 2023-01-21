package shared

// GiftCardActivityRedeem
// Present only when `GiftCardActivityType` is REDEEM.
type GiftCardActivityRedeem struct {
	AmountMoney Money   `json:"amount_money"`
	PaymentID   *string `json:"payment_id,omitempty"`
	ReferenceID *string `json:"reference_id,omitempty"`
}
