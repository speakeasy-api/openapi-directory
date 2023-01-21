package shared

// SearchInvoicesRequest
// Describes a `SearchInvoices` request.
type SearchInvoicesRequest struct {
	Cursor *string      `json:"cursor,omitempty"`
	Limit  *int64       `json:"limit,omitempty"`
	Query  InvoiceQuery `json:"query"`
}
