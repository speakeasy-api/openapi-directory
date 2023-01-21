package shared

// CreateRefundRequest
// Defines the body parameters that can be included in
// a request to the [CreateRefund](https://developer.squareup.com/reference/square_2021-08-18/transactions-api/create-refund) endpoint.
//
// Deprecated - recommend using [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment)
type CreateRefundRequest struct {
	AmountMoney    Money   `json:"amount_money"`
	IdempotencyKey string  `json:"idempotency_key"`
	Reason         *string `json:"reason,omitempty"`
	TenderID       string  `json:"tender_id"`
}
