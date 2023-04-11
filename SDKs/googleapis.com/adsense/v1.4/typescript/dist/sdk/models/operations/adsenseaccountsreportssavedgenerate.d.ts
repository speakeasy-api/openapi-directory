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
export declare class AdsenseAccountsReportsSavedGenerateRequest extends SpeakeasyBase {
    /**
     * Account to which the saved reports belong.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
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
     * The saved report to retrieve.
     */
    savedReportId: string;
    /**
     * Index of the first row of report data to return.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AdsenseAccountsReportsSavedGenerateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    adsenseReportsGenerateResponse?: shared.AdsenseReportsGenerateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
