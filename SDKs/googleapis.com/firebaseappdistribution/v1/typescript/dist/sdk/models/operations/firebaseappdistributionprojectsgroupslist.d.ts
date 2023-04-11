import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebaseappdistributionProjectsGroupsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseappdistributionProjectsGroupsListRequest extends SpeakeasyBase {
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
     * Optional. The maximum number of groups to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 groups are returned. Values above 100 are coerced to 100.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The name of the project resource, which is the parent of the group resources. Format: `projects/{project_number}`
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
export declare class FirebaseappdistributionProjectsGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleFirebaseAppdistroV1ListGroupsResponse?: shared.GoogleFirebaseAppdistroV1ListGroupsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
