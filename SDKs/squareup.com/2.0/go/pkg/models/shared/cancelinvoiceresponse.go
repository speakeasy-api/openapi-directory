package shared

// CancelInvoiceResponse
// The response returned by the `CancelInvoice` request.
type CancelInvoiceResponse struct {
	Errors  []Error  `json:"errors,omitempty"`
	Invoice *Invoice `json:"invoice,omitempty"`
}
