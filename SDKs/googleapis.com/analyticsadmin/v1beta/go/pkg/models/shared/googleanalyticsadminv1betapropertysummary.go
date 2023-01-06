package shared

type GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum string

const (
	GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnumPropertyTypeUnspecified GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnumPropertyTypeOrdinary    GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_ORDINARY"
	GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnumPropertyTypeSubproperty GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_SUBPROPERTY"
	GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnumPropertyTypeRollup      GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum = "PROPERTY_TYPE_ROLLUP"
)

// GoogleAnalyticsAdminV1betaPropertySummary
// A virtual resource representing metadata for a GA4 property.
type GoogleAnalyticsAdminV1betaPropertySummary struct {
	DisplayName  *string                                                    `json:"displayName,omitempty"`
	Parent       *string                                                    `json:"parent,omitempty"`
	Property     *string                                                    `json:"property,omitempty"`
	PropertyType *GoogleAnalyticsAdminV1betaPropertySummaryPropertyTypeEnum `json:"propertyType,omitempty"`
}
