package shared

// GoogleAnalyticsAdminV1betaConversionEvent
// A conversion event in a Google Analytics property.
type GoogleAnalyticsAdminV1betaConversionEvent struct {
	CreateTime *string `json:"createTime,omitempty"`
	Custom     *bool   `json:"custom,omitempty"`
	Deletable  *bool   `json:"deletable,omitempty"`
	EventName  *string `json:"eventName,omitempty"`
	Name       *string `json:"name,omitempty"`
}

// GoogleAnalyticsAdminV1betaConversionEventInput
// A conversion event in a Google Analytics property.
type GoogleAnalyticsAdminV1betaConversionEventInput struct {
	EventName *string `json:"eventName,omitempty"`
}
