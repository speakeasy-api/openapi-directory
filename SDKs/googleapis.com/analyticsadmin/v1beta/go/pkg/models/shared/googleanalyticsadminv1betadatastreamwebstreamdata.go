package shared

// GoogleAnalyticsAdminV1betaDataStreamWebStreamData
// Data specific to web streams.
type GoogleAnalyticsAdminV1betaDataStreamWebStreamData struct {
	DefaultURI    *string `json:"defaultUri,omitempty"`
	FirebaseAppID *string `json:"firebaseAppId,omitempty"`
	MeasurementID *string `json:"measurementId,omitempty"`
}

// GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput
// Data specific to web streams.
type GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput struct {
	DefaultURI *string `json:"defaultUri,omitempty"`
}
