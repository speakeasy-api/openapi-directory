import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScriptProjectsGetMetricsSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Required field indicating what granularity of metrics are returned.
 */
export declare enum ScriptProjectsGetMetricsMetricsGranularityEnum {
    UnspecifiedGranularity = "UNSPECIFIED_GRANULARITY",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
export declare class ScriptProjectsGetMetricsRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional field indicating a specific deployment to retrieve metrics from.
     */
    metricsFilterDeploymentId?: string;
    /**
     * Required field indicating what granularity of metrics are returned.
     */
    metricsGranularity?: ScriptProjectsGetMetricsMetricsGranularityEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required field indicating the script to get metrics for.
     */
    scriptId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ScriptProjectsGetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    metrics?: shared.Metrics;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
