import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class YoutubeCommentThreadsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
 */
export declare enum YoutubeCommentThreadsListModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}
export declare enum YoutubeCommentThreadsListOrderEnum {
    OrderUnspecified = "orderUnspecified",
    Time = "time",
    Relevance = "relevance"
}
/**
 * The requested text format for the returned comments.
 */
export declare enum YoutubeCommentThreadsListTextFormatEnum {
    TextFormatUnspecified = "textFormatUnspecified",
    Html = "html",
    PlainText = "plainText"
}
export declare class YoutubeCommentThreadsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Returns the comment threads of all videos of the channel and the channel comments as well.
     */
    allThreadsRelatedToChannelId?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     */
    channelId?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Returns the comment threads with the given IDs for Stubby or Apiary.
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
     * Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     */
    moderationStatus?: YoutubeCommentThreadsListModerationStatusEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    order?: YoutubeCommentThreadsListOrderEnum;
    /**
     * The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     */
    pageToken?: string;
    /**
     * The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
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
     * Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     */
    searchTerms?: string;
    /**
     * The requested text format for the returned comments.
     */
    textFormat?: YoutubeCommentThreadsListTextFormatEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Returns the comment threads of the specified video.
     */
    videoId?: string;
}
export declare class YoutubeCommentThreadsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    commentThreadListResponse?: shared.CommentThreadListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
