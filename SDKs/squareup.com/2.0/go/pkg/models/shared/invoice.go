package shared

// Invoice
// Stores information about an invoice. You use the Invoices API to create and manage
// invoices. For more information, see [Manage Invoices Using the Invoices API](https://developer.squareup.com/docs/invoices-api/overview).
type Invoice struct {
	AcceptedPaymentMethods *InvoiceAcceptedPaymentMethods `json:"accepted_payment_methods,omitempty"`
	CreatedAt              *string                        `json:"created_at,omitempty"`
	CustomFields           []InvoiceCustomField           `json:"custom_fields,omitempty"`
	DeliveryMethod         *interface{}                   `json:"delivery_method,omitempty"`
	Description            *string                        `json:"description,omitempty"`
	ID                     *string                        `json:"id,omitempty"`
	InvoiceNumber          *string                        `json:"invoice_number,omitempty"`
	LocationID             *string                        `json:"location_id,omitempty"`
	NextPaymentAmountMoney *Money                         `json:"next_payment_amount_money,omitempty"`
	OrderID                *string                        `json:"order_id,omitempty"`
	PaymentRequests        []InvoicePaymentRequest        `json:"payment_requests,omitempty"`
	PrimaryRecipient       *InvoiceRecipient              `json:"primary_recipient,omitempty"`
	PublicURL              *string                        `json:"public_url,omitempty"`
	ScheduledAt            *string                        `json:"scheduled_at,omitempty"`
	Status                 *string                        `json:"status,omitempty"`
	SubscriptionID         *string                        `json:"subscription_id,omitempty"`
	Timezone               *string                        `json:"timezone,omitempty"`
	Title                  *string                        `json:"title,omitempty"`
	UpdatedAt              *string                        `json:"updated_at,omitempty"`
	Version                *int64                         `json:"version,omitempty"`
}
