import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum {
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

export enum GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum {
    RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
    CostData = "COST_DATA",
    RevenueData = "REVENUE_DATA"
}

export enum GoogleAnalyticsAdminV1betaCustomMetricScopeEnum {
    MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED",
    Event = "EVENT"
}


// GoogleAnalyticsAdminV1betaCustomMetric
/** 
 * A definition for a custom metric.
**/
export class GoogleAnalyticsAdminV1betaCustomMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}


// GoogleAnalyticsAdminV1betaCustomMetricInput
/** 
 * A definition for a custom metric.
**/
export class GoogleAnalyticsAdminV1betaCustomMetricInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=parameterName" })
  parameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}
