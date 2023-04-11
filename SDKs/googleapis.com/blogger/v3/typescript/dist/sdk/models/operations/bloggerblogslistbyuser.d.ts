import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BloggerBlogsListByUserSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerBlogsListByUserSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerBlogsListByUserSecurity extends SpeakeasyBase {
    option1?: BloggerBlogsListByUserSecurityOption1;
    option2?: BloggerBlogsListByUserSecurityOption2;
}
export declare enum BloggerBlogsListByUserRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare enum BloggerBlogsListByUserStatusEnum {
    Live = "LIVE",
    Deleted = "DELETED"
}
export declare enum BloggerBlogsListByUserViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BloggerBlogsListByUserRequest extends SpeakeasyBase {
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
    fetchUserInfo?: boolean;
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
    role?: BloggerBlogsListByUserRoleEnum[];
    /**
     * Default value of status is LIVE.
     */
    status?: BloggerBlogsListByUserStatusEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    userId: string;
    view?: BloggerBlogsListByUserViewEnum;
}
export declare class BloggerBlogsListByUserResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    blogList?: shared.BlogList;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
