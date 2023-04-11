import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AnalyticsDataMcfGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataMcfGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AnalyticsDataMcfGetSecurity extends SpeakeasyBase {
    option1?: AnalyticsDataMcfGetSecurityOption1;
    option2?: AnalyticsDataMcfGetSecurityOption2;
}
/**
 * The desired sampling level.
 */
export declare enum AnalyticsDataMcfGetSamplingLevelEnum {
    Default = "DEFAULT",
    Faster = "FASTER",
    HigherPrecision = "HIGHER_PRECISION"
}
export declare class AnalyticsDataMcfGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
     */
    dimensions?: string;
    /**
     * End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
     */
    endDate: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * A comma-separated list of dimension or metric filters to be applied to the Analytics data.
     */
    filters?: string;
    /**
     * Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
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
     * A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
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
     * The desired sampling level.
     */
    samplingLevel?: AnalyticsDataMcfGetSamplingLevelEnum;
    /**
     * A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
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
export declare class AnalyticsDataMcfGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    mcfData?: shared.McfData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
