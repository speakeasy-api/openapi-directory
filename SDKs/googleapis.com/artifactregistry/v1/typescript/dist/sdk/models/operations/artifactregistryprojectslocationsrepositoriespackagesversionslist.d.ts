import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2;
}
/**
 * The view that should be returned in the response.
 */
export declare enum ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest extends SpeakeasyBase {
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
     * Optional. The field to order the results by.
     */
    orderBy?: string;
    /**
     * The maximum number of versions to return. Maximum page size is 1,000.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * The name of the parent resource whose versions will be listed.
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
     * The view that should be returned in the response.
     */
    view?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
