import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementUnsampledReportsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUnsampledReportsListSecurityOption1;
    option2?: AnalyticsManagementUnsampledReportsListSecurityOption2;
    option3?: AnalyticsManagementUnsampledReportsListSecurityOption3;
}
export declare class AnalyticsManagementUnsampledReportsListRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
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
     * The maximum number of unsampled reports to include in this response.
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
     * View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
     */
    profileId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    unsampledReports?: shared.UnsampledReports;
}
