// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleAnalyticsAdminV1betaAccount - A resource message representing a Google Analytics account.
type GoogleAnalyticsAdminV1betaAccount struct {
	// Output only. Time when this account was originally created.
	CreateTime *string `json:"createTime,omitempty"`
	// Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.
	Deleted *bool `json:"deleted,omitempty"`
	// Required. Human-readable display name for this account.
	DisplayName *string `json:"displayName,omitempty"`
	// Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
	Name *string `json:"name,omitempty"`
	// Country of business. Must be a Unicode CLDR region code.
	RegionCode *string `json:"regionCode,omitempty"`
	// Output only. Time when account payload fields were last updated.
	UpdateTime *string `json:"updateTime,omitempty"`
}

// GoogleAnalyticsAdminV1betaAccountInput - A resource message representing a Google Analytics account.
type GoogleAnalyticsAdminV1betaAccountInput struct {
	// Required. Human-readable display name for this account.
	DisplayName *string `json:"displayName,omitempty"`
	// Country of business. Must be a Unicode CLDR region code.
	RegionCode *string `json:"regionCode,omitempty"`
}
