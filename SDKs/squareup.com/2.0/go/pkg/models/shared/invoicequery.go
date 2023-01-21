package shared

// InvoiceQuery
// Describes query criteria for searching invoices.
type InvoiceQuery struct {
	Filter InvoiceFilter `json:"filter"`
	Sort   *InvoiceSort  `json:"sort,omitempty"`
}
