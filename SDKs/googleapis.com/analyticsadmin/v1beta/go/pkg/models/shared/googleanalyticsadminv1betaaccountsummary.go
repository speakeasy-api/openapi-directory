package shared

// GoogleAnalyticsAdminV1betaAccountSummary
// A virtual resource representing an overview of an account and all its child GA4 properties.
type GoogleAnalyticsAdminV1betaAccountSummary struct {
	Account           *string                                     `json:"account,omitempty"`
	DisplayName       *string                                     `json:"displayName,omitempty"`
	Name              *string                                     `json:"name,omitempty"`
	PropertySummaries []GoogleAnalyticsAdminV1betaPropertySummary `json:"propertySummaries,omitempty"`
}
