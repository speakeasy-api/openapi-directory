import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BloggerPostsGetByPathSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerPostsGetByPathSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerPostsGetByPathSecurity extends SpeakeasyBase {
    option1?: BloggerPostsGetByPathSecurityOption1;
    option2?: BloggerPostsGetByPathSecurityOption2;
}
export declare enum BloggerPostsGetByPathViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerPostsGetByPathRequest extends SpeakeasyBase {
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
    blogId: string;
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
    maxComments?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    path: string;
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
    view?: BloggerPostsGetByPathViewEnum;
}
export declare class BloggerPostsGetByPathResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
