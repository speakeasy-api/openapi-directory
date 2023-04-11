import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GkehubProjectsLocationsMembershipsListAdminSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class GkehubProjectsLocationsMembershipsListAdminRequest extends SpeakeasyBase {
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
     * Optional. Lists Memberships of admin clusters that match the filter expression.
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     */
    orderBy?: string;
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListAdminClusterMemberships` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Memberships of admin cluster will be listed. Specified in the format `projects/* /locations/*`.
     */
    parent: string;
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
export declare class GkehubProjectsLocationsMembershipsListAdminResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listAdminClusterMembershipsResponse?: shared.ListAdminClusterMembershipsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
