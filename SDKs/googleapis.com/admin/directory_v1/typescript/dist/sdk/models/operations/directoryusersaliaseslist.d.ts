import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectoryUsersAliasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersAliasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersAliasesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersAliasesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DirectoryUsersAliasesListSecurity extends SpeakeasyBase {
    option1?: DirectoryUsersAliasesListSecurityOption1;
    option2?: DirectoryUsersAliasesListSecurityOption2;
    option3?: DirectoryUsersAliasesListSecurityOption3;
    option4?: DirectoryUsersAliasesListSecurityOption4;
}
/**
 * Events to watch for.
 */
export declare enum DirectoryUsersAliasesListEventEnum {
    Add = "add",
    Delete = "delete"
}
export declare class DirectoryUsersAliasesListRequest extends SpeakeasyBase {
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
     * Events to watch for.
     */
    event?: DirectoryUsersAliasesListEventEnum;
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
     * Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
     */
    userKey: string;
}
export declare class DirectoryUsersAliasesListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    aliases?: shared.Aliases;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
