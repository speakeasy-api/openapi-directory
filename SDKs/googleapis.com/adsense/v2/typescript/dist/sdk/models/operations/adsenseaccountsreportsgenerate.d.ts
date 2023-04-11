import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsReportsGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsReportsGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsReportsGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsGenerateSecurityOption1;
    option2?: AdsenseAccountsReportsGenerateSecurityOption2;
}
/**
 * Date range of the report, if unset the range will be considered CUSTOM.
 */
export declare enum AdsenseAccountsReportsGenerateDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED",
    Custom = "CUSTOM",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    MonthToDate = "MONTH_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS"
}
export declare enum AdsenseAccountsReportsGenerateDimensionsEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Date = "DATE",
    Week = "WEEK",
    Month = "MONTH",
    AccountName = "ACCOUNT_NAME",
    AdClientId = "AD_CLIENT_ID",
    HostedAdClientId = "HOSTED_AD_CLIENT_ID",
    ProductName = "PRODUCT_NAME",
    ProductCode = "PRODUCT_CODE",
    AdUnitName = "AD_UNIT_NAME",
    AdUnitId = "AD_UNIT_ID",
    AdUnitSizeName = "AD_UNIT_SIZE_NAME",
    AdUnitSizeCode = "AD_UNIT_SIZE_CODE",
    CustomChannelName = "CUSTOM_CHANNEL_NAME",
    CustomChannelId = "CUSTOM_CHANNEL_ID",
    OwnedSiteDomainName = "OWNED_SITE_DOMAIN_NAME",
    OwnedSiteId = "OWNED_SITE_ID",
    UrlChannelName = "URL_CHANNEL_NAME",
    UrlChannelId = "URL_CHANNEL_ID",
    BuyerNetworkName = "BUYER_NETWORK_NAME",
    BuyerNetworkId = "BUYER_NETWORK_ID",
    BidTypeName = "BID_TYPE_NAME",
    BidTypeCode = "BID_TYPE_CODE",
    CreativeSizeName = "CREATIVE_SIZE_NAME",
    CreativeSizeCode = "CREATIVE_SIZE_CODE",
    DomainName = "DOMAIN_NAME",
    DomainCode = "DOMAIN_CODE",
    CountryName = "COUNTRY_NAME",
    CountryCode = "COUNTRY_CODE",
    PlatformTypeName = "PLATFORM_TYPE_NAME",
    PlatformTypeCode = "PLATFORM_TYPE_CODE",
    TargetingTypeName = "TARGETING_TYPE_NAME",
    TargetingTypeCode = "TARGETING_TYPE_CODE",
    ContentPlatformName = "CONTENT_PLATFORM_NAME",
    ContentPlatformCode = "CONTENT_PLATFORM_CODE",
    AdPlacementName = "AD_PLACEMENT_NAME",
    AdPlacementCode = "AD_PLACEMENT_CODE",
    RequestedAdTypeName = "REQUESTED_AD_TYPE_NAME",
    RequestedAdTypeCode = "REQUESTED_AD_TYPE_CODE",
    ServedAdTypeName = "SERVED_AD_TYPE_NAME",
    ServedAdTypeCode = "SERVED_AD_TYPE_CODE",
    AdFormatName = "AD_FORMAT_NAME",
    AdFormatCode = "AD_FORMAT_CODE",
    CustomSearchStyleName = "CUSTOM_SEARCH_STYLE_NAME",
    CustomSearchStyleId = "CUSTOM_SEARCH_STYLE_ID",
    DomainRegistrant = "DOMAIN_REGISTRANT",
    WebsearchQueryString = "WEBSEARCH_QUERY_STRING"
}
export declare enum AdsenseAccountsReportsGenerateMetricsEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    PageViews = "PAGE_VIEWS",
    AdRequests = "AD_REQUESTS",
    MatchedAdRequests = "MATCHED_AD_REQUESTS",
    TotalImpressions = "TOTAL_IMPRESSIONS",
    Impressions = "IMPRESSIONS",
    IndividualAdImpressions = "INDIVIDUAL_AD_IMPRESSIONS",
    Clicks = "CLICKS",
    PageViewsSpamRatio = "PAGE_VIEWS_SPAM_RATIO",
    AdRequestsSpamRatio = "AD_REQUESTS_SPAM_RATIO",
    MatchedAdRequestsSpamRatio = "MATCHED_AD_REQUESTS_SPAM_RATIO",
    ImpressionsSpamRatio = "IMPRESSIONS_SPAM_RATIO",
    IndividualAdImpressionsSpamRatio = "INDIVIDUAL_AD_IMPRESSIONS_SPAM_RATIO",
    ClicksSpamRatio = "CLICKS_SPAM_RATIO",
    AdRequestsCoverage = "AD_REQUESTS_COVERAGE",
    PageViewsCtr = "PAGE_VIEWS_CTR",
    AdRequestsCtr = "AD_REQUESTS_CTR",
    MatchedAdRequestsCtr = "MATCHED_AD_REQUESTS_CTR",
    ImpressionsCtr = "IMPRESSIONS_CTR",
    IndividualAdImpressionsCtr = "INDIVIDUAL_AD_IMPRESSIONS_CTR",
    ActiveViewMeasurability = "ACTIVE_VIEW_MEASURABILITY",
    ActiveViewViewability = "ACTIVE_VIEW_VIEWABILITY",
    ActiveViewTime = "ACTIVE_VIEW_TIME",
    EstimatedEarnings = "ESTIMATED_EARNINGS",
    PageViewsRpm = "PAGE_VIEWS_RPM",
    AdRequestsRpm = "AD_REQUESTS_RPM",
    MatchedAdRequestsRpm = "MATCHED_AD_REQUESTS_RPM",
    ImpressionsRpm = "IMPRESSIONS_RPM",
    IndividualAdImpressionsRpm = "INDIVIDUAL_AD_IMPRESSIONS_RPM",
    CostPerClick = "COST_PER_CLICK",
    AdsPerImpression = "ADS_PER_IMPRESSION",
    TotalEarnings = "TOTAL_EARNINGS",
    WebsearchResultPages = "WEBSEARCH_RESULT_PAGES"
}
/**
 * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
 */
export declare enum AdsenseAccountsReportsGenerateReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED",
    AccountTimeZone = "ACCOUNT_TIME_ZONE",
    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}
export declare class AdsenseAccountsReportsGenerateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Required. The account which owns the collection of reports. Format: accounts/{account}
     */
    account: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currencyCode?: string;
    /**
     * Date range of the report, if unset the range will be considered CUSTOM.
     */
    dateRange?: AdsenseAccountsReportsGenerateDateRangeEnum;
    /**
     * Dimensions to base the report on.
     */
    dimensions?: AdsenseAccountsReportsGenerateDimensionsEnum[];
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    endDateDay?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    endDateMonth?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    endDateYear?: number;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A list of [filters](/adsense/management/reporting/filtering) to apply to the report. All provided filters must match in order for the data to be included in the report.
     */
    filters?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * The maximum number of rows of report data to return. Reports producing more rows than the requested limit will be truncated. If unset, this defaults to 100,000 rows for `Reports.GenerateReport` and 1,000,000 rows for `Reports.GenerateCsvReport`, which are also the maximum values permitted here. Report truncation can be identified (for `Reports.GenerateReport` only) by comparing the number of rows returned to the value returned in `total_matched_rows`.
     */
    limit?: number;
    /**
     * Required. Reporting metrics.
     */
    metrics?: AdsenseAccountsReportsGenerateMetricsEnum[];
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The name of a dimension or metric to sort the resulting report on, can be prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    orderBy?: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    reportingTimeZone?: AdsenseAccountsReportsGenerateReportingTimeZoneEnum;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    startDateDay?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    startDateMonth?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    startDateYear?: number;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class AdsenseAccountsReportsGenerateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    reportResult?: shared.ReportResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
