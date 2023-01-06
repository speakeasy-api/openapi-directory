package shared

// TestValidateQuery
// Validation results
type TestValidateQuery struct {
	ID  int64    `json:"id"`
	Tag []string `json:"tag,omitempty"`
}
