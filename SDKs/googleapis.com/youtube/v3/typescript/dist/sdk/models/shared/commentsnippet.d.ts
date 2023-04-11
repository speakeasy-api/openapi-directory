import { SpeakeasyBase } from "../../../internal/utils";
import { CommentSnippetAuthorChannelId } from "./commentsnippetauthorchannelid";
/**
 * The comment's moderation status. Will not be set if the comments were requested through the id filter.
 */
export declare enum CommentSnippetModerationStatusEnum {
    Published = "published",
    HeldForReview = "heldForReview",
    LikelySpam = "likelySpam",
    Rejected = "rejected"
}
/**
 * The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.
 */
export declare enum CommentSnippetViewerRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}
/**
 * Basic details about a comment, such as its author and text.
 */
export declare class CommentSnippet extends SpeakeasyBase {
    /**
     * The id of the author's YouTube channel, if any.
     */
    authorChannelId?: CommentSnippetAuthorChannelId;
    /**
     * Link to the author's YouTube channel, if any.
     */
    authorChannelUrl?: string;
    /**
     * The name of the user who posted the comment.
     */
    authorDisplayName?: string;
    /**
     * The URL for the avatar of the user who posted the comment.
     */
    authorProfileImageUrl?: string;
    /**
     * Whether the current viewer can rate this comment.
     */
    canRate?: boolean;
    /**
     * The id of the corresponding YouTube channel. In case of a channel comment this is the channel the comment refers to. In case of a video comment it's the video's channel.
     */
    channelId?: string;
    /**
     * The total number of likes this comment has received.
     */
    likeCount?: number;
    /**
     * The comment's moderation status. Will not be set if the comments were requested through the id filter.
     */
    moderationStatus?: CommentSnippetModerationStatusEnum;
    /**
     * The unique id of the parent comment, only set for replies.
     */
    parentId?: string;
    /**
     * The date and time when the comment was originally published.
     */
    publishedAt?: Date;
    /**
     * The comment's text. The format is either plain text or HTML dependent on what has been requested. Even the plain text representation may differ from the text originally posted in that it may replace video links with video titles etc.
     */
    textDisplay?: string;
    /**
     * The comment's original raw text as initially posted or last updated. The original text will only be returned if it is accessible to the viewer, which is only guaranteed if the viewer is the comment's author.
     */
    textOriginal?: string;
    /**
     * The date and time when the comment was last updated.
     */
    updatedAt?: Date;
    /**
     * The ID of the video the comment refers to, if any.
     */
    videoId?: string;
    /**
     * The rating the viewer has given to this comment. For the time being this will never return RATE_TYPE_DISLIKE and instead return RATE_TYPE_NONE. This may change in the future.
     */
    viewerRating?: CommentSnippetViewerRatingEnum;
}
