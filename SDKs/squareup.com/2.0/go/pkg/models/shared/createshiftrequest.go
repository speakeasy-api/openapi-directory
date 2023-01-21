package shared

// CreateShiftRequest
// Represents a request to create a `Shift`.
type CreateShiftRequest struct {
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	Shift          Shift   `json:"shift"`
}
