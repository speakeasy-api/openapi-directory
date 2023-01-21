package shared

// UpdateInvoiceResponse
// Describes a `UpdateInvoice` response.
type UpdateInvoiceResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Invoice *Invoice `json:"invoice,omitempty"`
}
