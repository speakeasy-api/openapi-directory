package shared

import (
	"time"
)

type Invoice struct {
	Amount     *float32        `json:"amount,omitempty"`
	Billing    *BillingAddress `json:"billing,omitempty"`
	Currency   *string         `json:"currency,omitempty"`
	ID         *int64          `json:"id,omitempty"`
	InvoiceNo  *int64          `json:"invoice_no,omitempty"`
	InvoicedAt *time.Time      `json:"invoiced_at,omitempty"`
	Links      *InvoiceLinks   `json:"links,omitempty"`
	Status     *string         `json:"status,omitempty"`
}
