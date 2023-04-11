import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sort by the specified dimension.
 */
export declare enum NetworkReportSpecSortConditionDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Month = "MONTH",
    Week = "WEEK",
    AdUnit = "AD_UNIT",
    App = "APP",
    AdType = "AD_TYPE",
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
export declare enum NetworkReportSpecSortConditionMetricEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    AdRequests = "AD_REQUESTS",
    Clicks = "CLICKS",
    EstimatedEarnings = "ESTIMATED_EARNINGS",
    Impressions = "IMPRESSIONS",
    ImpressionCtr = "IMPRESSION_CTR",
    ImpressionRpm = "IMPRESSION_RPM",
    MatchedRequests = "MATCHED_REQUESTS",
    MatchRate = "MATCH_RATE",
    ShowRate = "SHOW_RATE"
}
/**
 * Sorting order of the dimension or metric.
 */
export declare enum NetworkReportSpecSortConditionOrderEnum {
    SortOrderUnspecified = "SORT_ORDER_UNSPECIFIED",
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Sorting direction to be applied on a dimension or a metric.
 */
export declare class NetworkReportSpecSortCondition extends SpeakeasyBase {
    /**
     * Sort by the specified dimension.
     */
    dimension?: NetworkReportSpecSortConditionDimensionEnum;
    /**
     * Sort by the specified metric.
     */
    metric?: NetworkReportSpecSortConditionMetricEnum;
    /**
     * Sorting order of the dimension or metric.
     */
    order?: NetworkReportSpecSortConditionOrderEnum;
}
