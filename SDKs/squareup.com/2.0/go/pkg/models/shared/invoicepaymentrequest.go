// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// InvoicePaymentRequest - Represents a payment request for an [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice). Invoices can specify a maximum
// of 13 payment requests, with up to 12 `INSTALLMENT` request types. For more information,
// see [Payment requests](https://developer.squareup.com/docs/invoices-api/overview#payment-requests).
//
// Adding `INSTALLMENT` payment requests to an invoice requires an
// [Invoices Plus subscription](https://developer.squareup.com/docs/invoices-api/overview#invoices-plus-subscription).
type InvoicePaymentRequest struct {
	// The payment method for an automatic payment.
	//
	// The default value is `NONE`.
	AutomaticPaymentSource *string `json:"automatic_payment_source,omitempty"`
	// The ID of the credit or debit card on file to charge for the payment request. To get the cards on file for a customer,
	// call [ListCards](https://developer.squareup.com/reference/square_2021-08-18/cards-api/list-cards) and include the `customer_id` of the invoice recipient.
	CardID *string `json:"card_id,omitempty"`
	// Represents an amount of money. `Money` fields can be signed or unsigned.
	// Fields that do not explicitly define whether they are signed or unsigned are
	// considered unsigned and can only hold positive amounts. For signed fields, the
	// sign of the value indicates the purpose of the money transfer. See
	// [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
	// for more information.
	ComputedAmountMoney *Money `json:"computed_amount_money,omitempty"`
	// The due date (in the invoice's time zone) for the payment request, in `YYYY-MM-DD` format. This field
	// is required to create a payment request.
	//
	// After this date, the invoice becomes overdue. For example, a payment `due_date` of 2021-03-09 with a `timezone`
	// of America/Los\_Angeles becomes overdue at midnight on March 9 in America/Los\_Angeles (which equals a UTC
	// timestamp of 2021-03-10T08:00:00Z).
	DueDate *string `json:"due_date,omitempty"`
	// Represents an amount of money. `Money` fields can be signed or unsigned.
	// Fields that do not explicitly define whether they are signed or unsigned are
	// considered unsigned and can only hold positive amounts. For signed fields, the
	// sign of the value indicates the purpose of the money transfer. See
	// [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
	// for more information.
	FixedAmountRequestedMoney *Money `json:"fixed_amount_requested_money,omitempty"`
	// Specifies the amount for the payment request in percentage:
	//
	// - When the payment `request_type` is `DEPOSIT`, it is the percentage of the order's total amount.
	// - When the payment `request_type` is `INSTALLMENT`, it is the percentage of the order's total less
	// the deposit, if requested. The sum of the `percentage_requested` in all installment
	// payment requests must be equal to 100.
	//
	// You cannot specify this when the payment `request_type` is `BALANCE` or when the
	// payment request specifies the `fixed_amount_requested_money` field.
	PercentageRequested *string `json:"percentage_requested,omitempty"`
	// A list of one or more reminders to send for the payment request.
	Reminders []InvoicePaymentReminder `json:"reminders,omitempty"`
	// Indicates how Square processes the payment request. DEPRECATED at version 2021-01-21. Replaced by the
	// `Invoice.delivery_method` and `InvoicePaymentRequest.automatic_payment_source` fields.
	//
	// One of the following is required when creating an invoice:
	// - (Recommended) The `delivery_method` field of the invoice. To configure an automatic payment, the
	// `automatic_payment_source` field of the payment request is also required.
	// - This `request_method` field. Note that `invoice` objects returned in responses do not include `request_method`.
	RequestMethod *string `json:"request_method,omitempty"`
	// Identifies the payment request type. This type defines how the payment request amount is determined.
	// This field is required to create a payment request.
	RequestType *string `json:"request_type,omitempty"`
	// Represents an amount of money. `Money` fields can be signed or unsigned.
	// Fields that do not explicitly define whether they are signed or unsigned are
	// considered unsigned and can only hold positive amounts. For signed fields, the
	// sign of the value indicates the purpose of the money transfer. See
	// [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
	// for more information.
	RoundingAdjustmentIncludedMoney *Money `json:"rounding_adjustment_included_money,omitempty"`
	// If set to true, the Square-hosted invoice page (the `public_url` field of the invoice)
	// provides a place for the customer to pay a tip.
	//
	// This field is allowed only on the final payment request
	// and the payment `request_type` must be `BALANCE` or `INSTALLMENT`.
	TippingEnabled *bool `json:"tipping_enabled,omitempty"`
	// Represents an amount of money. `Money` fields can be signed or unsigned.
	// Fields that do not explicitly define whether they are signed or unsigned are
	// considered unsigned and can only hold positive amounts. For signed fields, the
	// sign of the value indicates the purpose of the money transfer. See
	// [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
	// for more information.
	TotalCompletedAmountMoney *Money `json:"total_completed_amount_money,omitempty"`
	// The Square-generated ID of the payment request in an [invoice](https://developer.squareup.com/reference/square_2021-08-18/objects/Invoice).
	UID *string `json:"uid,omitempty"`
}
