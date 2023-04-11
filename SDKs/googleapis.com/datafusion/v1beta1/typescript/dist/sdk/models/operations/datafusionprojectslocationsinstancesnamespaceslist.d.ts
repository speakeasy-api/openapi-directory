import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatafusionProjectsLocationsInstancesNamespacesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * By default, only basic information about a namespace is returned (e.g. name). When `NAMESPACE_VIEW_FULL` is specified, additional information associated with a namespace gets returned (e.g. IAM policy set on the namespace)
 */
export declare enum DatafusionProjectsLocationsInstancesNamespacesListViewEnum {
    NamespaceViewUnspecified = "NAMESPACE_VIEW_UNSPECIFIED",
    NamespaceViewBasic = "NAMESPACE_VIEW_BASIC",
    NamespaceViewFull = "NAMESPACE_VIEW_FULL"
}
export declare class DatafusionProjectsLocationsInstancesNamespacesListRequest extends SpeakeasyBase {
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value to use if there are additional results to retrieve for this list request.
     */
    pageToken?: string;
    /**
     * Required. The instance to list its namespaces.
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
    /**
     * By default, only basic information about a namespace is returned (e.g. name). When `NAMESPACE_VIEW_FULL` is specified, additional information associated with a namespace gets returned (e.g. IAM policy set on the namespace)
     */
    view?: DatafusionProjectsLocationsInstancesNamespacesListViewEnum;
}
export declare class DatafusionProjectsLocationsInstancesNamespacesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listNamespacesResponse?: shared.ListNamespacesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
