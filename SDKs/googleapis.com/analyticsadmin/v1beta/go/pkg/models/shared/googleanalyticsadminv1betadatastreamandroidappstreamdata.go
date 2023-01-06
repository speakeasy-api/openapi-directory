package shared

// GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData
// Data specific to Android app streams.
type GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData struct {
	FirebaseAppID *string `json:"firebaseAppId,omitempty"`
	PackageName   *string `json:"packageName,omitempty"`
}

// GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput
// Data specific to Android app streams.
type GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput struct {
	PackageName *string `json:"packageName,omitempty"`
}
