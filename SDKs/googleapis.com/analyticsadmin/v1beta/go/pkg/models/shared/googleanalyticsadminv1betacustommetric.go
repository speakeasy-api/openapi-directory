package shared

type GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum string

const (
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumMeasurementUnitUnspecified GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "MEASUREMENT_UNIT_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumStandard                   GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "STANDARD"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumCurrency                   GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "CURRENCY"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumFeet                       GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "FEET"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumMeters                     GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "METERS"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumKilometers                 GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "KILOMETERS"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumMiles                      GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "MILES"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumMilliseconds               GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "MILLISECONDS"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumSeconds                    GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "SECONDS"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumMinutes                    GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "MINUTES"
	GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnumHours                      GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum = "HOURS"
)

type GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum string

const (
	GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnumRestrictedMetricTypeUnspecified GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum = "RESTRICTED_METRIC_TYPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnumCostData                        GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum = "COST_DATA"
	GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnumRevenueData                     GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum = "REVENUE_DATA"
)

type GoogleAnalyticsAdminV1betaCustomMetricScopeEnum string

const (
	GoogleAnalyticsAdminV1betaCustomMetricScopeEnumMetricScopeUnspecified GoogleAnalyticsAdminV1betaCustomMetricScopeEnum = "METRIC_SCOPE_UNSPECIFIED"
	GoogleAnalyticsAdminV1betaCustomMetricScopeEnumEvent                  GoogleAnalyticsAdminV1betaCustomMetricScopeEnum = "EVENT"
)

// GoogleAnalyticsAdminV1betaCustomMetric
// A definition for a custom metric.
type GoogleAnalyticsAdminV1betaCustomMetric struct {
	Description          *string                                                          `json:"description,omitempty"`
	DisplayName          *string                                                          `json:"displayName,omitempty"`
	MeasurementUnit      *GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum       `json:"measurementUnit,omitempty"`
	Name                 *string                                                          `json:"name,omitempty"`
	ParameterName        *string                                                          `json:"parameterName,omitempty"`
	RestrictedMetricType []GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum `json:"restrictedMetricType,omitempty"`
	Scope                *GoogleAnalyticsAdminV1betaCustomMetricScopeEnum                 `json:"scope,omitempty"`
}

// GoogleAnalyticsAdminV1betaCustomMetricInput
// A definition for a custom metric.
type GoogleAnalyticsAdminV1betaCustomMetricInput struct {
	Description          *string                                                          `json:"description,omitempty"`
	DisplayName          *string                                                          `json:"displayName,omitempty"`
	MeasurementUnit      *GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum       `json:"measurementUnit,omitempty"`
	ParameterName        *string                                                          `json:"parameterName,omitempty"`
	RestrictedMetricType []GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum `json:"restrictedMetricType,omitempty"`
	Scope                *GoogleAnalyticsAdminV1betaCustomMetricScopeEnum                 `json:"scope,omitempty"`
}
