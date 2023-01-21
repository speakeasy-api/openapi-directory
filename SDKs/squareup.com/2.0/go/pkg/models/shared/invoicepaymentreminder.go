package shared

// InvoicePaymentReminder
// Describes a payment request reminder (automatic notification) that Square sends
// to the customer. You configure a reminder relative to the payment request
// `due_date`.
type InvoicePaymentReminder struct {
	Message               *string `json:"message,omitempty"`
	RelativeScheduledDays *int64  `json:"relative_scheduled_days,omitempty"`
	SentAt                *string `json:"sent_at,omitempty"`
	Status                *string `json:"status,omitempty"`
	UID                   *string `json:"uid,omitempty"`
}
