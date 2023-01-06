package shared

type GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum string

const (
	GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnumHTTPSLatencyStateUnspecified GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum = "HTTPS_LATENCY_STATE_UNSPECIFIED"
	GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnumRecovery                     GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum = "RECOVERY"
	GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnumProblem                      GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum = "PROBLEM"
)

// GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEvent
// Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..
type GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEvent struct {
	HTTPSLatencyRoutineData *GoogleChromeManagementV1HTTPSLatencyRoutineData                               `json:"httpsLatencyRoutineData,omitempty"`
	HTTPSLatencyState       *GoogleChromeManagementV1TelemetryHTTPSLatencyChangeEventHTTPSLatencyStateEnum `json:"httpsLatencyState,omitempty"`
}
