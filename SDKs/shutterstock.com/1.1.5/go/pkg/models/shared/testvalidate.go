package shared

// TestValidate
// Validation results
type TestValidate struct {
	Header *TestValidateHeader `json:"header,omitempty"`
	Query  *TestValidateQuery  `json:"query,omitempty"`
}
