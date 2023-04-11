import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OsloginUsersGetLoginProfileSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class OsloginUsersGetLoginProfileSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class OsloginUsersGetLoginProfileSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class OsloginUsersGetLoginProfileSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class OsloginUsersGetLoginProfileSecurity extends SpeakeasyBase {
    option1?: OsloginUsersGetLoginProfileSecurityOption1;
    option2?: OsloginUsersGetLoginProfileSecurityOption2;
    option3?: OsloginUsersGetLoginProfileSecurityOption3;
    option4?: OsloginUsersGetLoginProfileSecurityOption4;
}
export declare class OsloginUsersGetLoginProfileRequest extends SpeakeasyBase {
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
     * Required. The unique ID for the user in format `users/{user}`.
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
     * The project ID of the Google Cloud Platform project.
     */
    projectId?: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * A system ID for filtering the results of the request.
     */
    systemId?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class OsloginUsersGetLoginProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    loginProfile?: shared.LoginProfile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
