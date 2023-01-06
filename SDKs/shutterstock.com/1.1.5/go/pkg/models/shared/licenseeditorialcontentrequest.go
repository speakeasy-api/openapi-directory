package shared

// LicenseEditorialContentRequest
// License editorial content request
type LicenseEditorialContentRequest struct {
	Country   interface{}               `json:"country"`
	Editorial []LicenseEditorialContent `json:"editorial"`
}
