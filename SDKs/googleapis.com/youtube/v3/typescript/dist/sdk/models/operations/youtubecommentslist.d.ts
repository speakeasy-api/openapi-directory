import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeCommentsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * The requested text format for the returned comments.
 */
export declare enum YoutubeCommentsListTextFormatEnum {
    TextFormatUnspecified = "textFormatUnspecified",
    Html = "html",
    PlainText = "plainText"
}
export declare class YoutubeCommentsListRequest extends SpeakeasyBase {
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
     * Returns the comments with the given IDs for One Platform.
     */
    id?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     */
    parentId?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     */
    part: string[];
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The requested text format for the returned comments.
     */
    textFormat?: YoutubeCommentsListTextFormatEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class YoutubeCommentsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    commentListResponse?: shared.CommentListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
