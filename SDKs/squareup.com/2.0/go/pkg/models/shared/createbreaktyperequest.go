package shared

// CreateBreakTypeRequest
// A request to create a new `BreakType`.
type CreateBreakTypeRequest struct {
	BreakType      BreakType `json:"break_type"`
	IdempotencyKey *string   `json:"idempotency_key,omitempty"`
}
