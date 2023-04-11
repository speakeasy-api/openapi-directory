import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsDataGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataGetSecurityOption1;
    option2?: AnalyticsDataGetSecurityOption2;
}
export declare class AnalyticsDataGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     */
    dimensions?: string;
    /**
     * End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
     */
    endDate: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to the report data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
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
     * A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
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
     * An Analytics advanced segment to be applied to the report data.
     */
    segment?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for the report data.
     */
    sort?: string;
    /**
     * Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
     */
    startDate: string;
    /**
     * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
     */
    startIndex?: number;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class AnalyticsDataGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
