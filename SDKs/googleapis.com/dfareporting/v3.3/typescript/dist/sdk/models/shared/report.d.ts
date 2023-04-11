import { SpeakeasyBase } from "../../../internal/utils";
import { Activities } from "./activities";
import { CustomRichMediaEvents } from "./customrichmediaevents";
import { DateRange } from "./daterange";
import { DimensionValue } from "./dimensionvalue";
import { Recipient } from "./recipient";
import { SortedDimension } from "./sorteddimension";
/**
 * The report criteria for a report of type "STANDARD".
 */
export declare class ReportCriteria extends SpeakeasyBase {
    /**
     * Represents an activity group.
     */
    activities?: Activities;
    /**
     * Represents a Custom Rich Media Events group.
     */
    customRichMediaEvents?: CustomRichMediaEvents;
    /**
     * Represents a date range.
     */
    dateRange?: DateRange;
    /**
     * The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
     */
    dimensionFilters?: DimensionValue[];
    /**
     * The list of standard dimensions the report should include.
     */
    dimensions?: SortedDimension[];
    /**
     * The list of names of metrics the report should include.
     */
    metricNames?: string[];
}
/**
 * The dimension option.
 */
export declare enum ReportCrossDimensionReachCriteriaDimensionEnum {
    Advertiser = "ADVERTISER",
    Campaign = "CAMPAIGN",
    SiteByAdvertiser = "SITE_BY_ADVERTISER",
    SiteByCampaign = "SITE_BY_CAMPAIGN"
}
/**
 * The report criteria for a report of type "CROSS_DIMENSION_REACH".
 */
export declare class ReportCrossDimensionReachCriteria extends SpeakeasyBase {
    /**
     * The list of dimensions the report should include.
     */
    breakdown?: SortedDimension[];
    /**
     * Represents a date range.
     */
    dateRange?: DateRange;
    /**
     * The dimension option.
     */
    dimension?: ReportCrossDimensionReachCriteriaDimensionEnum;
    /**
     * The list of filters on which dimensions are filtered.
     */
    dimensionFilters?: DimensionValue[];
    /**
     * The list of names of metrics the report should include.
     */
    metricNames?: string[];
    /**
     * The list of names of overlap metrics the report should include.
     */
    overlapMetricNames?: string[];
    /**
     * Whether the report is pivoted or not. Defaults to true.
     */
    pivoted?: boolean;
}
/**
 * The type of delivery for the owner to receive, if enabled.
 */
export declare enum ReportDeliveryEmailOwnerDeliveryTypeEnum {
    Link = "LINK",
    Attachment = "ATTACHMENT"
}
/**
 * The report's email delivery settings.
 */
export declare class ReportDelivery extends SpeakeasyBase {
    /**
     * Whether the report should be emailed to the report owner.
     */
    emailOwner?: boolean;
    /**
     * The type of delivery for the owner to receive, if enabled.
     */
    emailOwnerDeliveryType?: ReportDeliveryEmailOwnerDeliveryTypeEnum;
    /**
     * The message to be sent with each email.
     */
    message?: string;
    /**
     * The list of recipients to which to email the report.
     */
    recipients?: Recipient[];
}
/**
 * The properties of the report.
 */
export declare class ReportFloodlightCriteriaReportProperties extends SpeakeasyBase {
    /**
     * Include conversions that have no cookie, but do have an exposure path.
     */
    includeAttributedIPConversions?: boolean;
    /**
     * Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
     */
    includeUnattributedCookieConversions?: boolean;
    /**
     * Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
     */
    includeUnattributedIPConversions?: boolean;
}
/**
 * The report criteria for a report of type "FLOODLIGHT".
 */
export declare class ReportFloodlightCriteria extends SpeakeasyBase {
    /**
     * The list of custom rich media events to include.
     */
    customRichMediaEvents?: DimensionValue[];
    /**
     * Represents a date range.
     */
    dateRange?: DateRange;
    /**
     * The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
     */
    dimensionFilters?: DimensionValue[];
    /**
     * The list of dimensions the report should include.
     */
    dimensions?: SortedDimension[];
    /**
     * Represents a DimensionValue resource.
     */
    floodlightConfigId?: DimensionValue;
    /**
     * The list of names of metrics the report should include.
     */
    metricNames?: string[];
    /**
     * The properties of the report.
     */
    reportProperties?: ReportFloodlightCriteriaReportProperties;
}
/**
 * The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
 */
export declare enum ReportFormatEnum {
    Csv = "CSV",
    Excel = "EXCEL"
}
/**
 * The properties of the report.
 */
export declare class ReportPathToConversionCriteriaReportProperties extends SpeakeasyBase {
    /**
     * CM360 checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
     */
    clicksLookbackWindow?: number;
    /**
     * CM360 checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
     */
    impressionsLookbackWindow?: number;
    /**
     * Deprecated: has no effect.
     */
    includeAttributedIPConversions?: boolean;
    /**
     * Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
     */
    includeUnattributedCookieConversions?: boolean;
    /**
     * Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
     */
    includeUnattributedIPConversions?: boolean;
    /**
     * The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
     */
    maximumClickInteractions?: number;
    /**
     * The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
     */
    maximumImpressionInteractions?: number;
    /**
     * The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90.
     */
    maximumInteractionGap?: number;
    /**
     * Enable pivoting on interaction path.
     */
    pivotOnInteractionPath?: boolean;
}
/**
 * The report criteria for a report of type "PATH_TO_CONVERSION".
 */
export declare class ReportPathToConversionCriteria extends SpeakeasyBase {
    /**
     * The list of 'dfa:activity' values to filter on.
     */
    activityFilters?: DimensionValue[];
    /**
     * The list of conversion dimensions the report should include.
     */
    conversionDimensions?: SortedDimension[];
    /**
     * The list of custom floodlight variables the report should include.
     */
    customFloodlightVariables?: SortedDimension[];
    /**
     * The list of custom rich media events to include.
     */
    customRichMediaEvents?: DimensionValue[];
    /**
     * Represents a date range.
     */
    dateRange?: DateRange;
    /**
     * Represents a DimensionValue resource.
     */
    floodlightConfigId?: DimensionValue;
    /**
     * The list of names of metrics the report should include.
     */
    metricNames?: string[];
    /**
     * The list of per interaction dimensions the report should include.
     */
    perInteractionDimensions?: SortedDimension[];
    /**
     * The properties of the report.
     */
    reportProperties?: ReportPathToConversionCriteriaReportProperties;
}
/**
 * The report criteria for a report of type "REACH".
 */
export declare class ReportReachCriteria extends SpeakeasyBase {
    /**
     * Represents an activity group.
     */
    activities?: Activities;
    /**
     * Represents a Custom Rich Media Events group.
     */
    customRichMediaEvents?: CustomRichMediaEvents;
    /**
     * Represents a date range.
     */
    dateRange?: DateRange;
    /**
     * The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
     */
    dimensionFilters?: DimensionValue[];
    /**
     * The list of dimensions the report should include.
     */
    dimensions?: SortedDimension[];
    /**
     * Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days.
     */
    enableAllDimensionCombinations?: boolean;
    /**
     * The list of names of metrics the report should include.
     */
    metricNames?: string[];
    /**
     * The list of names of Reach By Frequency metrics the report should include.
     */
    reachByFrequencyMetricNames?: string[];
}
export declare enum ReportScheduleRepeatsOnWeekDaysEnum {
    Sunday = "SUNDAY",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY"
}
/**
 * Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
 */
export declare enum ReportScheduleRunsOnDayOfMonthEnum {
    DayOfMonth = "DAY_OF_MONTH",
    WeekOfMonth = "WEEK_OF_MONTH"
}
/**
 * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
 */
export declare class ReportSchedule extends SpeakeasyBase {
    /**
     * Whether the schedule is active or not. Must be set to either true or false.
     */
    active?: boolean;
    /**
     * Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".
     */
    every?: number;
    expirationDate?: Date;
    /**
     * The interval for which the report is repeated. Note: - "DAILY" also requires field "every" to be set. - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set. - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set.
     */
    repeats?: string;
    /**
     * List of week days "WEEKLY" on which scheduled reports should run.
     */
    repeatsOnWeekDays?: ReportScheduleRepeatsOnWeekDaysEnum[];
    /**
     * Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
     */
    runsOnDayOfMonth?: ReportScheduleRunsOnDayOfMonthEnum;
    startDate?: Date;
}
/**
 * The type of the report.
 */
export declare enum ReportTypeEnum {
    Standard = "STANDARD",
    Reach = "REACH",
    PathToConversion = "PATH_TO_CONVERSION",
    CrossDimensionReach = "CROSS_DIMENSION_REACH",
    Floodlight = "FLOODLIGHT"
}
/**
 * Represents a Report resource.
 */
export declare class Report extends SpeakeasyBase {
    /**
     * The account ID to which this report belongs.
     */
    accountId?: string;
    /**
     * The report criteria for a report of type "STANDARD".
     */
    criteria?: ReportCriteria;
    /**
     * The report criteria for a report of type "CROSS_DIMENSION_REACH".
     */
    crossDimensionReachCriteria?: ReportCrossDimensionReachCriteria;
    /**
     * The report's email delivery settings.
     */
    delivery?: ReportDelivery;
    /**
     * The eTag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The filename used when generating report files for this report.
     */
    fileName?: string;
    /**
     * The report criteria for a report of type "FLOODLIGHT".
     */
    floodlightCriteria?: ReportFloodlightCriteria;
    /**
     * The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
     */
    format?: ReportFormatEnum;
    /**
     * The unique ID identifying this report resource.
     */
    id?: string;
    /**
     * The kind of resource this is, in this case dfareporting#report.
     */
    kind?: string;
    /**
     * The timestamp (in milliseconds since epoch) of when this report was last modified.
     */
    lastModifiedTime?: string;
    /**
     * The name of the report.
     */
    name?: string;
    /**
     * The user profile id of the owner of this report.
     */
    ownerProfileId?: string;
    /**
     * The report criteria for a report of type "PATH_TO_CONVERSION".
     */
    pathToConversionCriteria?: ReportPathToConversionCriteria;
    /**
     * The report criteria for a report of type "REACH".
     */
    reachCriteria?: ReportReachCriteria;
    /**
     * The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
     */
    schedule?: ReportSchedule;
    /**
     * The subaccount ID to which this report belongs if applicable.
     */
    subAccountId?: string;
    /**
     * The type of the report.
     */
    type?: ReportTypeEnum;
}
