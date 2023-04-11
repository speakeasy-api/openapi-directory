import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppengineProjectsLocationsApplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineProjectsLocationsApplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineProjectsLocationsApplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class AppengineProjectsLocationsApplicationsGetSecurity extends SpeakeasyBase {
    option1?: AppengineProjectsLocationsApplicationsGetSecurityOption1;
    option2?: AppengineProjectsLocationsApplicationsGetSecurityOption2;
    option3?: AppengineProjectsLocationsApplicationsGetSecurityOption3;
}
export declare class AppengineProjectsLocationsApplicationsGetRequest extends SpeakeasyBase {
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
     * Part of `name`. See documentation of `projectsId`.
     */
    applicationsId: string;
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
     * Part of `name`. See documentation of `projectsId`.
     */
    locationsId: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Part of `name`. Name of the Application resource to get. Example: apps/myapp.
     */
    projectsId: string;
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
export declare class AppengineProjectsLocationsApplicationsGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    application?: shared.Application;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
