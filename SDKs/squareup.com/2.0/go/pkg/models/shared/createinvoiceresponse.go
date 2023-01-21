package shared

// CreateInvoiceResponse
// The response returned by the `CreateInvoice` request.
type CreateInvoiceResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Invoice *Invoice `json:"invoice,omitempty"`
}
