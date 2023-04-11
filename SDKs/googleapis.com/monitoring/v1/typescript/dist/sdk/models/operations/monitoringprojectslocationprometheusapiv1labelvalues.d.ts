import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption1;
    option2?: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption2;
    option3?: MonitoringProjectsLocationPrometheusApiV1LabelValuesSecurityOption3;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesRequest extends SpeakeasyBase {
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
     * The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    end?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The label name for which values are queried.
     */
    label: string;
    /**
     * Location of the resource information. Has to be "global" now.
     */
    location: string;
    /**
     * A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them.
     */
    match?: string;
    /**
     * The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
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
     * The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     */
    start?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class MonitoringProjectsLocationPrometheusApiV1LabelValuesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    httpBody?: shared.HttpBody;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
