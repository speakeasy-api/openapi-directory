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
export declare class AdsenseAccountsReportsGenerateRequest extends SpeakeasyBase {
    /**
     * Account upon which to report.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
     */
    currency?: string;
    /**
     * Dimensions to base the report on.
     */
    dimension?: string[];
    /**
     * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    endDate: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Filters to be run on the report.
     */
    filter?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     */
    locale?: string;
    /**
     * The maximum number of rows of report data to return.
     */
    maxResults?: number;
    /**
     * Numeric columns to include in the report.
     */
    metric?: string[];
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     */
    sort?: string[];
    /**
     * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     */
    startDate: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
    /**
     * Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
     */
    useTimezoneReporting?: boolean;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsReportsGenerateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
