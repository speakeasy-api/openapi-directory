import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BloggerPostsPatchSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class BloggerPostsPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    post?: shared.Post;
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
    fetchBody?: boolean;
    fetchImages?: boolean;
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
    postId: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    publish?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    revert?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class BloggerPostsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    post?: shared.Post;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
