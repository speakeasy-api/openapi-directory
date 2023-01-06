package shared

// GoogleAnalyticsAdminV1betaAccount
// A resource message representing a Google Analytics account.
type GoogleAnalyticsAdminV1betaAccount struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Deleted     *bool   `json:"deleted,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	RegionCode  *string `json:"regionCode,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}

// GoogleAnalyticsAdminV1betaAccountInput
// A resource message representing a Google Analytics account.
type GoogleAnalyticsAdminV1betaAccountInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	RegionCode  *string `json:"regionCode,omitempty"`
}
