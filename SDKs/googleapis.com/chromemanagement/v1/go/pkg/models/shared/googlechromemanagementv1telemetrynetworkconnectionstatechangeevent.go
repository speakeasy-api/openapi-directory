package shared

type GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum string

const (
	GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnumNetworkConnectionStateUnspecified GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum = "NETWORK_CONNECTION_STATE_UNSPECIFIED"
	GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnumOnline                            GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum = "ONLINE"
	GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnumConnected                         GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum = "CONNECTED"
	GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnumPortal                            GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum = "PORTAL"
	GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnumConnecting                        GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum = "CONNECTING"
	GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnumNotConnected                      GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum = "NOT_CONNECTED"
)

// GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent
// `TelemetryNetworkConnectionStateChangeEvent` is triggered on network connection state changes.
type GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent struct {
	ConnectionState *GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum `json:"connectionState,omitempty"`
	GUID            *string                                                                                `json:"guid,omitempty"`
}
