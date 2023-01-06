package shared

// VerifyAPIResponseGetReport
// Verify
type VerifyAPIResponseGetReport struct {
	Network *string            `json:"network,omitempty"`
	Product *ProductVerifyEnum `json:"product,omitempty"`
	To      *string            `json:"to,omitempty"`
}
