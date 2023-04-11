import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sort by the specified dimension.
 */
export declare enum MediationReportSpecSortConditionDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Month = "MONTH",
    Week = "WEEK",
    AdSource = "AD_SOURCE",
    AdSourceInstance = "AD_SOURCE_INSTANCE",
    AdUnit = "AD_UNIT",
    App = "APP",
    MediationGroup = "MEDIATION_GROUP",
    Country = "COUNTRY",
    Format = "FORMAT",
    Platform = "PLATFORM",
    MobileOsVersion = "MOBILE_OS_VERSION",
    GmaSDKVersion = "GMA_SDK_VERSION",
    AppVersionName = "APP_VERSION_NAME",
    ServingRestriction = "SERVING_RESTRICTION"
}
/**
 * Sort by the specified metric.
 */
export declare enum MediationReportSpecSortConditionMetricEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    AdRequests = "AD_REQUESTS",
    Clicks = "CLICKS",
    EstimatedEarnings = "ESTIMATED_EARNINGS",
    Impressions = "IMPRESSIONS",
    ImpressionCtr = "IMPRESSION_CTR",
    MatchedRequests = "MATCHED_REQUESTS",
    MatchRate = "MATCH_RATE",
    ObservedEcpm = "OBSERVED_ECPM"
}
/**
 * Sorting order of the dimension or metric.
 */
export declare enum MediationReportSpecSortConditionOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Sorting direction to be applied on a dimension or a metric.
 */
export declare class MediationReportSpecSortCondition extends SpeakeasyBase {
    /**
     * Sort by the specified dimension.
     */
    dimension?: MediationReportSpecSortConditionDimensionEnum;
    /**
     * Sort by the specified metric.
     */
    metric?: MediationReportSpecSortConditionMetricEnum;
    /**
     * Sorting order of the dimension or metric.
     */
    order?: MediationReportSpecSortConditionOrderEnum;
}
