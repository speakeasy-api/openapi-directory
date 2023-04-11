import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1QueryExemplarsSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1QueryExemplarsRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    queryExemplarsRequest?: shared.QueryExemplarsRequest;
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
     * Location of the resource information. Has to be "global" now.
     */
    location: string;
    /**
     * The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
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
export declare class MonitoringProjectsLocationPrometheusApiV1QueryExemplarsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    httpBody?: shared.HttpBody;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
