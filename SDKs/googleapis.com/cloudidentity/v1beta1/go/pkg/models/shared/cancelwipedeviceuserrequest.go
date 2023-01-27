package shared

// CancelWipeDeviceUserRequest
// Request message for cancelling an unfinished user account wipe.
type CancelWipeDeviceUserRequest struct {
	Customer *string `json:"customer,omitempty"`
}
