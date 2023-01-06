package shared

type GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum string

const (
	GoogleAnalyticsAdminV1betaCustomDimensionScopeEnumDimensionScopeUnspecified GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum = "DIMENSION_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaCustomDimensionScopeEnumEvent                     GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum = "EVENT"
	GoogleAnalyticsAdminV1betaCustomDimensionScopeEnumUser                      GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum = "USER"
)

// GoogleAnalyticsAdminV1betaCustomDimension
// A definition for a CustomDimension.
type GoogleAnalyticsAdminV1betaCustomDimension struct {
	Description                *string                                             `json:"description,omitempty"`
	DisallowAdsPersonalization *bool                                               `json:"disallowAdsPersonalization,omitempty"`
	DisplayName                *string                                             `json:"displayName,omitempty"`
	Name                       *string                                             `json:"name,omitempty"`
	ParameterName              *string                                             `json:"parameterName,omitempty"`
	Scope                      *GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum `json:"scope,omitempty"`
}

// GoogleAnalyticsAdminV1betaCustomDimensionInput
// A definition for a CustomDimension.
type GoogleAnalyticsAdminV1betaCustomDimensionInput struct {
	Description                *string                                             `json:"description,omitempty"`
	DisallowAdsPersonalization *bool                                               `json:"disallowAdsPersonalization,omitempty"`
	DisplayName                *string                                             `json:"displayName,omitempty"`
	ParameterName              *string                                             `json:"parameterName,omitempty"`
	Scope                      *GoogleAnalyticsAdminV1betaCustomDimensionScopeEnum `json:"scope,omitempty"`
}
