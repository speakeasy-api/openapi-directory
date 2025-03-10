/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Required. The type for the custom metric's value.
 */
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
  Hours = "HOURS",
}

export enum GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum {
  RestrictedMetricTypeUnspecified = "RESTRICTED_METRIC_TYPE_UNSPECIFIED",
  CostData = "COST_DATA",
  RevenueData = "REVENUE_DATA",
}

/**
 * Required. Immutable. The scope of this custom metric.
 */
export enum GoogleAnalyticsAdminV1betaCustomMetricScopeEnum {
  MetricScopeUnspecified = "METRIC_SCOPE_UNSPECIFIED",
  Event = "EVENT",
}

/**
 * A definition for a custom metric.
 */
export class GoogleAnalyticsAdminV1betaCustomMetric extends SpeakeasyBase {
  /**
   * Optional. Description for this custom dimension. Max length of 150 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * Required. The type for the custom metric's value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;

  /**
   * Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parameterName" })
  parameterName?: string;

  /**
   * Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];

  /**
   * Required. Immutable. The scope of this custom metric.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}

/**
 * A definition for a custom metric.
 */
export class GoogleAnalyticsAdminV1betaCustomMetricInput extends SpeakeasyBase {
  /**
   * Optional. Description for this custom dimension. Max length of 150 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * Required. The type for the custom metric's value.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "measurementUnit" })
  measurementUnit?: GoogleAnalyticsAdminV1betaCustomMetricMeasurementUnitEnum;

  /**
   * Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parameterName" })
  parameterName?: string;

  /**
   * Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "restrictedMetricType" })
  restrictedMetricType?: GoogleAnalyticsAdminV1betaCustomMetricRestrictedMetricTypeEnum[];

  /**
   * Required. Immutable. The scope of this custom metric.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scope" })
  scope?: GoogleAnalyticsAdminV1betaCustomMetricScopeEnum;
}
