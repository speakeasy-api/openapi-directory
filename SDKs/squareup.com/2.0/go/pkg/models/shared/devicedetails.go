package shared

// DeviceDetails
// Details about the device that took the payment.
type DeviceDetails struct {
	DeviceID             *string `json:"device_id,omitempty"`
	DeviceInstallationID *string `json:"device_installation_id,omitempty"`
	DeviceName           *string `json:"device_name,omitempty"`
}
