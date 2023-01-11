import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum GoogleAnalyticsAdminV1betaCustomMetricScopeEnum {
    MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED",
    Event = "EVENT"
}
/**
 * A definition for a custom metric.
**/
export declare class GoogleAnalyticsAdminV1betaCustomMetric extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;
    name?: string;
    parameterName?: string;
    restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];
    scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}
/**
 * A definition for a custom metric.
**/
export declare class GoogleAnalyticsAdminV1betaCustomMetricInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;
    parameterName?: string;
    restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];
    scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}
