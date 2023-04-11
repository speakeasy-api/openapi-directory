import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementCustomDimensionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDimensionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDimensionsGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsManagementCustomDimensionsGetSecurityOption1;
    option2?: AnalyticsManagementCustomDimensionsGetSecurityOption2;
}
export declare class AnalyticsManagementCustomDimensionsGetRequest extends SpeakeasyBase {
    /**
     * Account ID for the custom dimension to retrieve.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * The ID of the custom dimension to retrieve.
     */
    customDimensionId: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * Web property ID for the custom dimension to retrieve.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    customDimension?: shared.CustomDimension;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
