import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementFiltersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementFiltersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementFiltersGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementFiltersGetSecurityOption1;
    option2?: AnalyticsManagementFiltersGetSecurityOption2;
}
export declare class AnalyticsManagementFiltersGetRequest extends SpeakeasyBase {
    /**
     * Account ID to retrieve filters for.
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
     * Filter ID to retrieve filters for.
     */
    filterId: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AnalyticsManagementFiltersGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    filter?: shared.Filter;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
