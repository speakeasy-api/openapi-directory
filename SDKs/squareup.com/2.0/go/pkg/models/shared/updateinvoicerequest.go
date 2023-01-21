package shared

// UpdateInvoiceRequest
// Describes a `UpdateInvoice` request.
type UpdateInvoiceRequest struct {
	FieldsToClear  []string `json:"fields_to_clear,omitempty"`
	IdempotencyKey *string  `json:"idempotency_key,omitempty"`
	Invoice        Invoice  `json:"invoice"`
}
