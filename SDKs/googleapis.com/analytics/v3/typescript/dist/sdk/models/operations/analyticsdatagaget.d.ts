import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsDataGaGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataGaGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataGaGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataGaGetSecurityOption1;
    option2?: AnalyticsDataGaGetSecurityOption2;
}
/**
 * The selected format for the response. Default format is JSON.
 */
export declare enum AnalyticsDataGaGetOutputEnum {
    DataTable = "dataTable",
    Json = "json"
}
/**
 * The desired sampling level.
 */
export declare enum AnalyticsDataGaGetSamplingLevelEnum {
    Default = "DEFAULT",
    Faster = "FASTER",
    HigherPrecision = "HIGHER_PRECISION"
}
export declare class AnalyticsDataGaGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
     */
    dimensions?: string;
    /**
     * End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
     */
    endDate: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to Analytics data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
     */
    ids: string;
    /**
     * The response will include empty rows if this parameter is set to true, the default is true
     */
    includeEmptyRows?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of entries to include in this feed.
     */
    maxResults?: number;
    /**
     * A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
     */
    metrics: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The selected format for the response. Default format is JSON.
     */
    output?: AnalyticsDataGaGetOutputEnum;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The desired sampling level.
     */
    samplingLevel?: AnalyticsDataGaGetSamplingLevelEnum;
    /**
     * An Analytics segment to be applied to data.
     */
    segment?: string;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
     */
    sort?: string;
    /**
     * Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
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
export declare class AnalyticsDataGaGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    gaData?: shared.GaData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
