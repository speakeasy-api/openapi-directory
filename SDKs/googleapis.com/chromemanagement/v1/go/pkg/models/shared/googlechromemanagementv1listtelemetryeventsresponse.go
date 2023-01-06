package shared

// GoogleChromeManagementV1ListTelemetryEventsResponse
// Response message for listing telemetry events for a customer.
type GoogleChromeManagementV1ListTelemetryEventsResponse struct {
	NextPageToken   *string                                  `json:"nextPageToken,omitempty"`
	TelemetryEvents []GoogleChromeManagementV1TelemetryEvent `json:"telemetryEvents,omitempty"`
}
