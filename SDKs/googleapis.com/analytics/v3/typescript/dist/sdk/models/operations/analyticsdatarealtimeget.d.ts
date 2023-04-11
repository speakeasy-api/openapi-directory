import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsDataRealtimeGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataRealtimeGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataRealtimeGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataRealtimeGetSecurityOption1;
    option2?: AnalyticsDataRealtimeGetSecurityOption2;
}
export declare class AnalyticsDataRealtimeGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
     */
    dimensions?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to real time data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     */
    ids: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of entries to include in this feed.
     */
    maxResults?: number;
    /**
     * A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
     */
    metrics: string;
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
     * A comma-separated list of dimensions or metrics that determine the sort order for real time data.
     */
    sort?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AnalyticsDataRealtimeGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    realtimeData?: shared.RealtimeData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
