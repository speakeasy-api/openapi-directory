import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Required. The metric to retrieve time series.
 */
export declare enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum {
    DailyMetricUnknown = "DAILY_METRIC_UNKNOWN",
    BusinessImpressionsDesktopMaps = "BUSINESS_IMPRESSIONS_DESKTOP_MAPS",
    BusinessImpressionsDesktopSearch = "BUSINESS_IMPRESSIONS_DESKTOP_SEARCH",
    BusinessImpressionsMobileMaps = "BUSINESS_IMPRESSIONS_MOBILE_MAPS",
    BusinessImpressionsMobileSearch = "BUSINESS_IMPRESSIONS_MOBILE_SEARCH",
    BusinessConversations = "BUSINESS_CONVERSATIONS",
    BusinessDirectionRequests = "BUSINESS_DIRECTION_REQUESTS",
    CallClicks = "CALL_CLICKS",
    WebsiteClicks = "WEBSITE_CLICKS",
    BusinessBookings = "BUSINESS_BOOKINGS",
    BusinessFoodOrders = "BUSINESS_FOOD_ORDERS",
    BusinessFoodMenuClicks = "BUSINESS_FOOD_MENU_CLICKS"
}
/**
 * Represents the day of the week. Eg: MONDAY.
 */
export declare enum BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum {
    DayOfWeekUnspecified = "DAY_OF_WEEK_UNSPECIFIED",
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}
export declare class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. The metric to retrieve time series.
     */
    dailyMetric?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailyMetricEnum;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    dailyRangeEndDateDay?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    dailyRangeEndDateMonth?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    dailyRangeEndDateYear?: number;
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    dailyRangeStartDateDay?: number;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    dailyRangeStartDateMonth?: number;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    dailyRangeStartDateYear?: number;
    /**
     * Represents the day of the week. Eg: MONDAY.
     */
    dailySubEntityTypeDayOfWeek?: BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesDailySubEntityTypeDayOfWeekEnum;
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
     */
    dailySubEntityTypeTimeOfDayHours?: number;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    dailySubEntityTypeTimeOfDayMinutes?: number;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    dailySubEntityTypeTimeOfDayNanos?: number;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
     */
    dailySubEntityTypeTimeOfDaySeconds?: number;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getDailyMetricsTimeSeriesResponse?: shared.GetDailyMetricsTimeSeriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
