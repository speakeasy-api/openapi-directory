import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsManagementCustomMetricsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsManagementCustomMetricsPatchRequest extends SpeakeasyBase {
    customMetricInput?: shared.CustomMetricInput;
    /**
     * Account ID for the custom metric to update.
     */
    accountId: string;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Custom metric ID for the custom metric to update.
     */
    customMetricId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
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
     * Web property ID for the custom metric to update.
     */
    webPropertyId: string;
}
export declare class AnalyticsManagementCustomMetricsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    customMetric?: shared.CustomMetric;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
