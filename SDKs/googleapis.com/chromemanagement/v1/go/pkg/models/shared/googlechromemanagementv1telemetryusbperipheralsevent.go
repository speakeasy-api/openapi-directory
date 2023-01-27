package shared

// GoogleChromeManagementV1TelemetryUsbPeripheralsEvent
// `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed.
type GoogleChromeManagementV1TelemetryUsbPeripheralsEvent struct {
	UsbPeripheralReport []GoogleChromeManagementV1UsbPeripheralReport `json:"usbPeripheralReport,omitempty"`
}
