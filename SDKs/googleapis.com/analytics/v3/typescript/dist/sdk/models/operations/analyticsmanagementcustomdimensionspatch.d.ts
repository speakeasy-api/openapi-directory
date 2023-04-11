import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementCustomDimensionsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomDimensionsPatchRequest extends SpeakeasyBase {
    customDimensionInput?: shared.CustomDimensionInput;
    /**
     * Account ID for the custom dimension to update.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Custom dimension ID for the custom dimension to update.
     */
    customDimensionId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
     */
    ignoreCustomDataSourceLinks?: boolean;
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
     * Web property ID for the custom dimension to update.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomDimensionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    customDimension?: shared.CustomDimension;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
