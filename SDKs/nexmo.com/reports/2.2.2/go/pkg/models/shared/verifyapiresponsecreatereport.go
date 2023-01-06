package shared

// VerifyAPIResponseCreateReport
// Verify
type VerifyAPIResponseCreateReport struct {
	Network *string            `json:"network,omitempty"`
	Product *ProductVerifyEnum `json:"product,omitempty"`
	To      *string            `json:"to,omitempty"`
}
