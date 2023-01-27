package shared

// ApproveDeviceUserRequest
// Request message for approving the device to access user data.
type ApproveDeviceUserRequest struct {
	Customer *string `json:"customer,omitempty"`
}
