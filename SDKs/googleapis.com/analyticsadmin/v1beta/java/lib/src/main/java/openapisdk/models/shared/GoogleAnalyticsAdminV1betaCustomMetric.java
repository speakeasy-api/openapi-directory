package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaCustomMetric
 * A definition for a custom metric.
**/
public class GoogleAnalyticsAdminV1betaCustomMetric {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleAnalyticsAdminV1betaCustomMetric withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAnalyticsAdminV1betaCustomMetric withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementUnit")
    public GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum measurementUnit;
    public GoogleAnalyticsAdminV1betaCustomMetric withMeasurementUnit(GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum measurementUnit) {
        this.measurementUnit = measurementUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAnalyticsAdminV1betaCustomMetric withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameterName")
    public String parameterName;
    public GoogleAnalyticsAdminV1betaCustomMetric withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictedMetricType")
    public GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[] restrictedMetricType;
    public GoogleAnalyticsAdminV1betaCustomMetric withRestrictedMetricType(GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[] restrictedMetricType) {
        this.restrictedMetricType = restrictedMetricType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public GoogleAnalyticsAdminV1betaCustomMetricScopeEnum scope;
    public GoogleAnalyticsAdminV1betaCustomMetric withScope(GoogleAnalyticsAdminV1betaCustomMetricScopeEnum scope) {
        this.scope = scope;
        return this;
    }
}