import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SqlUsersUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SqlUsersUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class SqlUsersUpdateSecurity extends SpeakeasyBase {
    option1?: SqlUsersUpdateSecurityOption1;
    option2?: SqlUsersUpdateSecurityOption2;
}
export declare class SqlUsersUpdateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    user?: shared.User;
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
     * Optional. Host of the user in the instance.
     */
    host?: string;
    /**
     * Database instance ID. This does not include the project ID.
     */
    instance: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Name of the user in the instance.
     */
    name?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Project ID of the project that contains the instance.
     */
    project: string;
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
export declare class SqlUsersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    operation?: shared.Operation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
