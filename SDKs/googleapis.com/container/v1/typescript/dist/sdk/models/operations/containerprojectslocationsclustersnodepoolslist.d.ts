import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContainerProjectsLocationsClustersNodePoolsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsListRequest extends SpeakeasyBase {
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
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
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
     * The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    parent: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
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
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listNodePoolsResponse?: shared.ListNodePoolsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
