package shared

// LicenseVideoRequest
// List of videos to license
type LicenseVideoRequest struct {
	Videos []LicenseVideo `json:"videos"`
}
