package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaCustomMetricInput
 * A definition for a custom metric.
**/
public class GoogleAnalyticsAdminV1betaCustomMetricInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleAnalyticsAdminV1betaCustomMetricInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaCustomMetricInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementUnit")
    public GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum measurementUnit;
    public GoogleAnalyticsAdminV1betaCustomMetricInput withMeasurementUnit(GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum measurementUnit) {
        this.measurementUnit = measurementUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterName")
    public String parameterName;
    public GoogleAnalyticsAdminV1betaCustomMetricInput withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedMetricType")
    public GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[] restrictedMetricType;
    public GoogleAnalyticsAdminV1betaCustomMetricInput withRestrictedMetricType(GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[] restrictedMetricType) {
        this.restrictedMetricType = restrictedMetricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public GoogleAnalyticsAdminV1betaCustomMetricScopeEnum scope;
    public GoogleAnalyticsAdminV1betaCustomMetricInput withScope(GoogleAnalyticsAdminV1betaCustomMetricScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}