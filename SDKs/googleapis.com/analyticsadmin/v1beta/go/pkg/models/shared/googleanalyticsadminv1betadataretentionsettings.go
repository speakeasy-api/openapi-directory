package shared

type GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum string

const (
	GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnumRetentionDurationUnspecified GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = "RETENTION_DURATION_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnumTwoMonths                    GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = "TWO_MONTHS"
	GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnumFourteenMonths               GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = "FOURTEEN_MONTHS"
	GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnumTwentySixMonths              GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = "TWENTY_SIX_MONTHS"
	GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnumThirtyEightMonths            GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = "THIRTY_EIGHT_MONTHS"
	GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnumFiftyMonths                  GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum = "FIFTY_MONTHS"
)

// GoogleAnalyticsAdminV1betaDataRetentionSettings
// Settings values for data retention. This is a singleton resource.
type GoogleAnalyticsAdminV1betaDataRetentionSettings struct {
	EventDataRetention         *GoogleAnalyticsAdminV1betaDataRetentionSettingsEventDataRetentionEnum `json:"eventDataRetention,omitempty"`
	Name                       *string                                                                `json:"name,omitempty"`
	ResetUserDataOnNewActivity *bool                                                                  `json:"resetUserDataOnNewActivity,omitempty"`
}
