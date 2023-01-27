package shared

type GoogleChromeManagementV1TelemetryEventEventTypeEnum string

const (
	GoogleChromeManagementV1TelemetryEventEventTypeEnumEventTypeUnspecified         GoogleChromeManagementV1TelemetryEventEventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	GoogleChromeManagementV1TelemetryEventEventTypeEnumAudioSevereUnderrun          GoogleChromeManagementV1TelemetryEventEventTypeEnum = "AUDIO_SEVERE_UNDERRUN"
	GoogleChromeManagementV1TelemetryEventEventTypeEnumNetworkConnectionStateChange GoogleChromeManagementV1TelemetryEventEventTypeEnum = "NETWORK_CONNECTION_STATE_CHANGE"
	GoogleChromeManagementV1TelemetryEventEventTypeEnumUsbAdded                     GoogleChromeManagementV1TelemetryEventEventTypeEnum = "USB_ADDED"
	GoogleChromeManagementV1TelemetryEventEventTypeEnumUsbRemoved                   GoogleChromeManagementV1TelemetryEventEventTypeEnum = "USB_REMOVED"
	GoogleChromeManagementV1TelemetryEventEventTypeEnumNetworkHTTPSLatencyChange    GoogleChromeManagementV1TelemetryEventEventTypeEnum = "NETWORK_HTTPS_LATENCY_CHANGE"
)

// GoogleChromeManagementV1TelemetryEvent
// Telemetry data reported by a managed device.
type GoogleChromeManagementV1TelemetryEvent struct {
	AudioSevereUnderrunEvent map[string]interface{}                                    `json:"audioSevereUnderrunEvent,omitempty"`
	Device                   *GoogleChromeManagementV1TelemetryDeviceInfo              `json:"device,omitempty"`
	EventType                *GoogleChromeManagementV1TelemetryEventEventTypeEnum      `json:"eventType,omitempty"`
	HTTPSLatencyChangeEvent  *GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEvent `json:"httpsLatencyChangeEvent,omitempty"`
	Name                     *string                                                   `json:"name,omitempty"`
	ReportTime               *string                                                   `json:"reportTime,omitempty"`
	UsbPeripheralsEvent      *GoogleChromeManagementV1TelemetryUsbPeripheralsEvent     `json:"usbPeripheralsEvent,omitempty"`
	User                     *GoogleChromeManagementV1TelemetryUserInfo                `json:"user,omitempty"`
}
