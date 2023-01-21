package shared

// PublishInvoiceResponse
// Describes a `PublishInvoice` response.
type PublishInvoiceResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Invoice *Invoice `json:"invoice,omitempty"`
}
