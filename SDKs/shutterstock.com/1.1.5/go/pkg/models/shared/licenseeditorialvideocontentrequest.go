package shared

// LicenseEditorialVideoContentRequest
// License editorial video content request
type LicenseEditorialVideoContentRequest struct {
	Country   interface{}                    `json:"country"`
	Editorial []LicenseEditorialVideoContent `json:"editorial"`
}
