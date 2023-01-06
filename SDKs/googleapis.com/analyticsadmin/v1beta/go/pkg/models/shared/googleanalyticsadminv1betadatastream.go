package shared

type GoogleAnalyticsAdminV1betaDataStreamTypeEnum string

const (
	GoogleAnalyticsAdminV1betaDataStreamTypeEnumDataStreamTypeUnspecified GoogleAnalyticsAdminV1betaDataStreamTypeEnum = "DATA_STREAM_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaDataStreamTypeEnumWebDataStream             GoogleAnalyticsAdminV1betaDataStreamTypeEnum = "WEB_DATA_STREAM"
	GoogleAnalyticsAdminV1betaDataStreamTypeEnumAndroidAppDataStream      GoogleAnalyticsAdminV1betaDataStreamTypeEnum = "ANDROID_APP_DATA_STREAM"
	GoogleAnalyticsAdminV1betaDataStreamTypeEnumIosAppDataStream          GoogleAnalyticsAdminV1betaDataStreamTypeEnum = "IOS_APP_DATA_STREAM"
)

// GoogleAnalyticsAdminV1betaDataStream
// A resource message representing a data stream.
type GoogleAnalyticsAdminV1betaDataStream struct {
	AndroidAppStreamData *GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData `json:"androidAppStreamData,omitempty"`
	CreateTime           *string                                                   `json:"createTime,omitempty"`
	DisplayName          *string                                                   `json:"displayName,omitempty"`
	IosAppStreamData     *GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData     `json:"iosAppStreamData,omitempty"`
	Name                 *string                                                   `json:"name,omitempty"`
	Type                 *GoogleAnalyticsAdminV1betaDataStreamTypeEnum             `json:"type,omitempty"`
	UpdateTime           *string                                                   `json:"updateTime,omitempty"`
	WebStreamData        *GoogleAnalyticsAdminV1betaDataStreamWebStreamData        `json:"webStreamData,omitempty"`
}

// GoogleAnalyticsAdminV1betaDataStreamInput
// A resource message representing a data stream.
type GoogleAnalyticsAdminV1betaDataStreamInput struct {
	AndroidAppStreamData *GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataInput `json:"androidAppStreamData,omitempty"`
	DisplayName          *string                                                        `json:"displayName,omitempty"`
	IosAppStreamData     *GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataInput     `json:"iosAppStreamData,omitempty"`
	Type                 *GoogleAnalyticsAdminV1betaDataStreamTypeEnum                  `json:"type,omitempty"`
	WebStreamData        *GoogleAnalyticsAdminV1betaDataStreamWebStreamDataInput        `json:"webStreamData,omitempty"`
}
