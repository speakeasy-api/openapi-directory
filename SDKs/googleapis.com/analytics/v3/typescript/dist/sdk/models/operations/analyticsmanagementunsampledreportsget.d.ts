import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementUnsampledReportsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUnsampledReportsGetSecurityOption1;
    option2?: AnalyticsManagementUnsampledReportsGetSecurityOption2;
    option3?: AnalyticsManagementUnsampledReportsGetSecurityOption3;
}
export declare class AnalyticsManagementUnsampledReportsGetRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve unsampled report for.
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * View (Profile) ID to retrieve unsampled report for.
     */
    profileId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * ID of the unsampled report to retrieve.
     */
    unsampledReportId: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property ID to retrieve unsampled reports for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    unsampledReport?: shared.UnsampledReport;
}
