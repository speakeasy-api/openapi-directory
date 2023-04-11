import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdsenseAccountsReportsSavedGenerateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AdsenseAccountsReportsSavedGenerateSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsReportsSavedGenerateSecurityOption1;
    option2?: AdsenseAccountsReportsSavedGenerateSecurityOption2;
}
/**
 * Date range of the report, if unset the range will be considered CUSTOM.
 */
export declare enum AdsenseAccountsReportsSavedGenerateDateRangeEnum {
    ReportingDateRangeUnspecified = "REPORTING_DATE_RANGE_UNSPECIFIED",
    Custom = "CUSTOM",
    Today = "TODAY",
    Yesterday = "YESTERDAY",
    MonthToDate = "MONTH_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS"
}
/**
 * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
 */
export declare enum AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum {
    ReportingTimeZoneUnspecified = "REPORTING_TIME_ZONE_UNSPECIFIED",
    AccountTimeZone = "ACCOUNT_TIME_ZONE",
    GoogleTimeZone = "GOOGLE_TIME_ZONE"
}
export declare class AdsenseAccountsReportsSavedGenerateRequest extends SpeakeasyBase {
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
     * The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currencyCode?: string;
    /**
     * Date range of the report, if unset the range will be considered CUSTOM.
     */
    dateRange?: AdsenseAccountsReportsSavedGenerateDateRangeEnum;
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
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The language to use for translating report output. If unspecified, this defaults to English ("en"). If the given language is not supported, report output will be returned in English. The language is specified as an [IETF BCP-47 language code](https://en.wikipedia.org/wiki/IETF_language_tag).
     */
    languageCode?: string;
    /**
     * Required. Name of the saved report. Format: accounts/{account}/reports/{report}
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
     * Timezone in which to generate the report. If unspecified, this defaults to the account timezone. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).
     */
    reportingTimeZone?: AdsenseAccountsReportsSavedGenerateReportingTimeZoneEnum;
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
export declare class AdsenseAccountsReportsSavedGenerateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    reportResult?: shared.ReportResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
