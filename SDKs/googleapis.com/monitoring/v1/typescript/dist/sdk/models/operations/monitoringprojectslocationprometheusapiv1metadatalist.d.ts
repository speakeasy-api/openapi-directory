import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1MetadataListSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListRequest extends SpeakeasyBase {
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
     * Maximum number of metrics to return.
     */
    limit?: string;
    /**
     * Location of the resource information. Has to be "global" for now.
     */
    location: string;
    /**
     * The metric name for which to query metadata. If unset, all metric metadata is returned.
     */
    metric?: string;
    /**
     * Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
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
export declare class MonitoringProjectsLocationPrometheusApiV1MetadataListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    httpBody?: shared.HttpBody;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
