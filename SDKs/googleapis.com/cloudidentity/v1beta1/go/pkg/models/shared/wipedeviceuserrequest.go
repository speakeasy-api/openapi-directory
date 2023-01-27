package shared

// WipeDeviceUserRequest
// Request message for starting an account wipe on device.
type WipeDeviceUserRequest struct {
	Customer *string `json:"customer,omitempty"`
}
