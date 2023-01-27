package shared

// CreateDeviceRequestInput
// Request message for creating a Company Owned device.
type CreateDeviceRequestInput struct {
	Customer *string      `json:"customer,omitempty"`
	Device   *DeviceInput `json:"device,omitempty"`
}
