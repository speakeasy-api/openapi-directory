package shared

// SearchInvoicesResponse
// Describes a `SearchInvoices` response.
type SearchInvoicesResponse struct {
	Cursor   *string   `json:"cursor,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
	Invoices []Invoice `json:"invoices,omitempty"`
}
