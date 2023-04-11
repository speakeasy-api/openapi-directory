import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest extends SpeakeasyBase {
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
     * The maximum number of artifacts to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value returned from a previous list request, if any.
     */
    pageToken?: string;
    /**
     * Required. The name of the parent resource whose npm packages will be listed.
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
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listNpmPackagesResponse?: shared.ListNpmPackagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
