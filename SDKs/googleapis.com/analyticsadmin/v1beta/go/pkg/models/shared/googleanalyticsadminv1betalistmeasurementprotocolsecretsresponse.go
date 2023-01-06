package shared

// GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse
// Response message for ListMeasurementProtocolSecret RPC
type GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse struct {
	MeasurementProtocolSecrets []GoogleAnalyticsAdminV1betaMeasurementProtocolSecret `json:"measurementProtocolSecrets,omitempty"`
	NextPageToken              *string                                               `json:"nextPageToken,omitempty"`
}
