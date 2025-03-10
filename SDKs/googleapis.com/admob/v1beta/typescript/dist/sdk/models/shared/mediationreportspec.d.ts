import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
import { LocalizationSettings } from "./localizationsettings";
import { MediationReportSpecDimensionFilter } from "./mediationreportspecdimensionfilter";
import { MediationReportSpecSortCondition } from "./mediationreportspecsortcondition";
export declare enum MediationReportSpecDimensionsEnum {
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
export declare enum MediationReportSpecMetricsEnum {
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
 * The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the 'US' and 'CN' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;
 */
export declare class MediationReportSpec extends SpeakeasyBase {
    /**
     * Specification of a single date range. Both dates are inclusive.
     */
    dateRange?: DateRange;
    /**
     * Describes which report rows to match based on their dimension values.
     */
    dimensionFilters?: MediationReportSpecDimensionFilter[];
    /**
     * List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.
     */
    dimensions?: MediationReportSpecDimensionsEnum[];
    /**
     * Localization settings for reports, such as currency and language. It affects how metrics are calculated.
     */
    localizationSettings?: LocalizationSettings;
    /**
     * Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.
     */
    maxReportRows?: number;
    /**
     * List of metrics of the report. A report must specify at least one metric.
     */
    metrics?: MediationReportSpecMetricsEnum[];
    /**
     * Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.
     */
    sortConditions?: MediationReportSpecSortCondition[];
    /**
     * A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.
     */
    timeZone?: string;
}
