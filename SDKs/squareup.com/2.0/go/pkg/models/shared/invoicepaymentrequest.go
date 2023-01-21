package shared

// InvoicePaymentRequest
// Represents a payment request for an [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice). Invoices can specify a maximum
// of 13 payment requests, with up to 12 `INSTALLMENT` request types. For more information,
// see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).
//
// Adding `INSTALLMENT` payment requests to an invoice requires an
// [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
type InvoicePaymentRequest struct {
	AutomaticPaymentSource          *string                  `json:"automatic_payment_source,omitempty"`
	CardID                          *string                  `json:"card_id,omitempty"`
	ComputedAmountMoney             *Money                   `json:"computed_amount_money,omitempty"`
	DueDate                         *string                  `json:"due_date,omitempty"`
	FixedAmountRequestedMoney       *Money                   `json:"fixed_amount_requested_money,omitempty"`
	PercentageRequested             *string                  `json:"percentage_requested,omitempty"`
	Reminders                       []InvoicePaymentReminder `json:"reminders,omitempty"`
	RequestMethod                   *string                  `json:"request_method,omitempty"`
	RequestType                     *string                  `json:"request_type,omitempty"`
	RoundingAdjustmentIncludedMoney *Money                   `json:"rounding_adjustment_included_money,omitempty"`
	TippingEnabled                  *bool                    `json:"tipping_enabled,omitempty"`
	TotalCompletedAmountMoney       *Money                   `json:"total_completed_amount_money,omitempty"`
	UID                             *string                  `json:"uid,omitempty"`
}
