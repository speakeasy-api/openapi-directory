import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2;
}
/**
 * The view that should be returned in the response.
 */
export declare enum ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest extends SpeakeasyBase {
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
     * Required. The name of the python package.
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
    /**
     * The view that should be returned in the response.
     */
    view?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    pythonPackage?: shared.PythonPackage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
