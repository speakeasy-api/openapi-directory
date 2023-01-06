package shared

// GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
// A secret value used for sending hits to Measurement Protocol.
type GoogleAnalyticsAdminV1betaMeasurementProtocolSecret struct {
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	SecretValue *string `json:"secretValue,omitempty"`
}

// GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput
// A secret value used for sending hits to Measurement Protocol.
type GoogleAnalyticsAdminV1betaMeasurementProtocolSecretInput struct {
	DisplayName *string `json:"displayName,omitempty"`
}
