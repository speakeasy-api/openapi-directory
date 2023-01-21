package shared

// InvoiceFilter
// Describes query filters to apply.
type InvoiceFilter struct {
	CustomerIds []string `json:"customer_ids,omitempty"`
	LocationIds []string `json:"location_ids"`
}
