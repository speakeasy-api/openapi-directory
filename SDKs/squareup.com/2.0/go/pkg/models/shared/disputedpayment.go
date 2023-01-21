package shared

// DisputedPayment
// The payment the cardholder disputed.
type DisputedPayment struct {
	PaymentID *string `json:"payment_id,omitempty"`
}
