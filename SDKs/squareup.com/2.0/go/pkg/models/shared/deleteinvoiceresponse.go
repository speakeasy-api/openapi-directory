package shared

// DeleteInvoiceResponse
// Describes a `DeleteInvoice` response.
type DeleteInvoiceResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
