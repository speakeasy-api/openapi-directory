import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringProjectsTimeSeriesQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsTimeSeriesQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsTimeSeriesQuerySecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsTimeSeriesQuerySecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsTimeSeriesQuerySecurityOption1;
    option2?: MonitoringProjectsTimeSeriesQuerySecurityOption2;
    option3?: MonitoringProjectsTimeSeriesQuerySecurityOption3;
}
export declare class MonitoringProjectsTimeSeriesQueryRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    queryTimeSeriesRequest?: shared.QueryTimeSeriesRequest;
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
     * Required. The project (https://cloud.google.com/monitoring/api/v3#project_name) on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER]
     */
    name: string;
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class MonitoringProjectsTimeSeriesQueryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    queryTimeSeriesResponse?: shared.QueryTimeSeriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
