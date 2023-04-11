import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementAccountSummariesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementAccountSummariesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementAccountSummariesListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementAccountSummariesListSecurityOption1;
    option2?: AnalyticsManagementAccountSummariesListSecurityOption2;
}
export declare class AnalyticsManagementAccountSummariesListRequest extends SpeakeasyBase {
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
     * The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
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
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AnalyticsManagementAccountSummariesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    accountSummaries?: shared.AccountSummaries;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
