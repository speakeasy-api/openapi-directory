import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type for the custom metric's value.
 */
export declare enum GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum {
    MeasurementUnitUnspecified = "MEASUREMENT_UNIT_UNSPECIFIED",
    Standard = "STANDARD",
    Currency = "CURRENCY",
    Feet = "FEET",
    Meters = "METERS",
    Kilometers = "KILOMETERS",
    Miles = "MILES",
    Milliseconds = "MILLISECONDS",
    Seconds = "SECONDS",
    Minutes = "MINUTES",
    Hours = "HOURS"
}
export declare enum GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
    CostData = "COST_DATA",
    RevenueData = "REVENUE_DATA"
}
/**
 * Required. Immutable. The scope of this custom metric.
 */
export declare enum GoogleAnalyticsAdminV1betaCustomMetricScopeEnum {
    MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED",
    Event = "EVENT"
}
/**
 * A definition for a custom metric.
 */
export declare class GoogleAnalyticsAdminV1betaCustomMetric extends SpeakeasyBase {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string;
    /**
     * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string;
    /**
     * Required. The type for the custom metric's value.
     */
    measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;
    /**
     * Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}
     */
    name?: string;
    /**
     * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
     */
    parameterName?: string;
    /**
     * Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
     */
    restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];
    /**
     * Required. Immutable. The scope of this custom metric.
     */
    scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}
/**
 * A definition for a custom metric.
 */
export declare class GoogleAnalyticsAdminV1betaCustomMetricInput extends SpeakeasyBase {
    /**
     * Optional. Description for this custom dimension. Max length of 150 characters.
     */
    description?: string;
    /**
     * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
     */
    displayName?: string;
    /**
     * Required. The type for the custom metric's value.
     */
    measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;
    /**
     * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
     */
    parameterName?: string;
    /**
     * Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
     */
    restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];
    /**
     * Required. Immutable. The scope of this custom metric.
     */
    scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}
