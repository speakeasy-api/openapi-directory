package shared

import (
	"time"
)

// UpsInvoice
// UPS invoice
type UpsInvoice struct {
	ControlID     *string    `json:"control_id,omitempty"`
	InvoiceAmount *float64   `json:"invoice_amount,omitempty"`
	InvoiceDate   *time.Time `json:"invoice_date,omitempty"`
	InvoiceNumber *string    `json:"invoice_number,omitempty"`
}
