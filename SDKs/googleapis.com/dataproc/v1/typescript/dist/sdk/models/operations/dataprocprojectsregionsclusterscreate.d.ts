import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataprocProjectsRegionsClustersCreateSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Optional. Failure action when primary worker creation fails.
 */
export declare enum DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum {
    FailureActionUnspecified = "FAILURE_ACTION_UNSPECIFIED",
    NoAction = "NO_ACTION",
    Delete = "DELETE"
}
export declare class DataprocProjectsRegionsClustersCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    clusterInput?: shared.ClusterInput;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Optional. Failure action when primary worker creation fails.
     */
    actionOnFailedPrimaryWorkers?: DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum;
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
     */
    projectId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. The Dataproc region in which to handle the request.
     */
    region: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two CreateClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.CreateClusterRequest)s with the same id, then the second request will be ignored and the first google.longrunning.Operation created and stored in the backend is returned.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsClustersCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
