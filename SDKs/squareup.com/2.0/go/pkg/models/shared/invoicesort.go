package shared

// InvoiceSort
// Identifies the sort field and sort order.
type InvoiceSort struct {
	Field string  `json:"field"`
	Order *string `json:"order,omitempty"`
}
