package shared

// GetInvoiceResponse
// Describes a `GetInvoice` response.
type GetInvoiceResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Invoice *Invoice `json:"invoice,omitempty"`
}
