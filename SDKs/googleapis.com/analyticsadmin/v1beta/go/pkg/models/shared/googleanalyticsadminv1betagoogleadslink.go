package shared

// GoogleAnalyticsAdminV1betaGoogleAdsLink
// A link between a GA4 property and a Google Ads account.
type GoogleAnalyticsAdminV1betaGoogleAdsLink struct {
	AdsPersonalizationEnabled *bool   `json:"adsPersonalizationEnabled,omitempty"`
	CanManageClients          *bool   `json:"canManageClients,omitempty"`
	CreateTime                *string `json:"createTime,omitempty"`
	CreatorEmailAddress       *string `json:"creatorEmailAddress,omitempty"`
	CustomerID                *string `json:"customerId,omitempty"`
	Name                      *string `json:"name,omitempty"`
	UpdateTime                *string `json:"updateTime,omitempty"`
}

// GoogleAnalyticsAdminV1betaGoogleAdsLinkInput
// A link between a GA4 property and a Google Ads account.
type GoogleAnalyticsAdminV1betaGoogleAdsLinkInput struct {
	AdsPersonalizationEnabled *bool   `json:"adsPersonalizationEnabled,omitempty"`
	CustomerID                *string `json:"customerId,omitempty"`
}
