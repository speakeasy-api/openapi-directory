package shared

// GiftCardActivityUnlinkedActivityRefund
// Present only when `GiftCardActivityType` is UNLINKED_ACTIVITY_REFUND.
type GiftCardActivityUnlinkedActivityRefund struct {
	AmountMoney Money   `json:"amount_money"`
	PaymentID   *string `json:"payment_id,omitempty"`
	ReferenceID *string `json:"reference_id,omitempty"`
}
