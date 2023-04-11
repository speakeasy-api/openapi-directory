import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementUnsampledReportsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementUnsampledReportsInsertSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementUnsampledReportsInsertSecurityOption1;
    option2?: AnalyticsManagementUnsampledReportsInsertSecurityOption2;
}
export declare class AnalyticsManagementUnsampledReportsInsertRequest extends SpeakeasyBase {
    unsampledReportInput?: shared.UnsampledReportInput;
    /**
     * Account ID to create the unsampled report for.
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
     * View (Profile) ID to create the unsampled report for.
     */
    profileId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property ID to create the unsampled report for.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementUnsampledReportsInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    unsampledReport?: shared.UnsampledReport;
}
