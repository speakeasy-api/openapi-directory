package shared

// GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData
// Data specific to iOS app streams.
type GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData struct {
	BundleID      *string `json:"bundleId,omitempty"`
	FirebaseAppID *string `json:"firebaseAppId,omitempty"`
}

// GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput
// Data specific to iOS app streams.
type GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput struct {
	BundleID *string `json:"bundleId,omitempty"`
}
