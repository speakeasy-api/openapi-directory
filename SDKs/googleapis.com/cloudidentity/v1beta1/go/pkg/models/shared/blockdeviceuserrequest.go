package shared

// BlockDeviceUserRequest
// Request message for blocking account on device.
type BlockDeviceUserRequest struct {
	Customer *string `json:"customer,omitempty"`
}
