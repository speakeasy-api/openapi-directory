import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementCustomDimensionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDimensionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDimensionsListSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomDimensionsListSecurityOption1;
    option2?: AnalyticsManagementCustomDimensionsListSecurityOption2;
}
export declare class AnalyticsManagementCustomDimensionsListRequest extends SpeakeasyBase {
    /**
     * Account ID for the custom dimensions to retrieve.
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
     * The maximum number of custom dimensions to include in this response.
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
    /**
     * Web property ID for the custom dimensions to retrieve.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    customDimensions?: shared.CustomDimensions;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
