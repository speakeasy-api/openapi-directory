package shared

// GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource
// A snapshot of a resource as before or after the result of a change in change history.
type GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource struct {
	Account                   *GoogleAnalyticsAdminV1betaAccount                   `json:"account,omitempty"`
	ConversionEvent           *GoogleAnalyticsAdminV1betaConversionEvent           `json:"conversionEvent,omitempty"`
	DataRetentionSettings     *GoogleAnalyticsAdminV1betaDataRetentionSettings     `json:"dataRetentionSettings,omitempty"`
	DataStream                *GoogleAnalyticsAdminV1betaDataStream                `json:"dataStream,omitempty"`
	FirebaseLink              *GoogleAnalyticsAdminV1betaFirebaseLink              `json:"firebaseLink,omitempty"`
	GoogleAdsLink             *GoogleAnalyticsAdminV1betaGoogleAdsLink             `json:"googleAdsLink,omitempty"`
	MeasurementProtocolSecret *GoogleAnalyticsAdminV1betaMeasurementProtocolSecret `json:"measurementProtocolSecret,omitempty"`
	Property                  *GoogleAnalyticsAdminV1betaProperty                  `json:"property,omitempty"`
}
