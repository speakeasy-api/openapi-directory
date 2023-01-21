package shared

// RefundPaymentRequest
// Describes a request to refund a payment using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
type RefundPaymentRequest struct {
	AmountMoney    Money   `json:"amount_money"`
	AppFeeMoney    *Money  `json:"app_fee_money,omitempty"`
	IdempotencyKey string  `json:"idempotency_key"`
	PaymentID      string  `json:"payment_id"`
	Reason         *string `json:"reason,omitempty"`
}
