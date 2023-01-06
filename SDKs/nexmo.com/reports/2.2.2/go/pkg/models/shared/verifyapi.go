package shared

// VerifyAPI
// Verify
type VerifyAPI struct {
	Network *string           `json:"network,omitempty"`
	Product ProductVerifyEnum `json:"product"`
	To      *string           `json:"to,omitempty"`
}
