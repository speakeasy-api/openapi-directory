import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The creator's avatar.
 */
export declare class CommentAuthorImage extends SpeakeasyBase {
    /**
     * The creator's avatar URL.
     */
    url?: string;
}
/**
 * The author of this Comment.
 */
export declare class CommentAuthor extends SpeakeasyBase {
    /**
     * The display name.
     */
    displayName?: string;
    /**
     * The identifier of the creator.
     */
    id?: string;
    /**
     * The creator's avatar.
     */
    image?: CommentAuthorImage;
    /**
     * The URL of the creator's Profile page.
     */
    url?: string;
}
/**
 * Data about the blog containing this comment.
 */
export declare class CommentBlog extends SpeakeasyBase {
    /**
     * The identifier of the blog containing this comment.
     */
    id?: string;
}
/**
 * Data about the comment this is in reply to.
 */
export declare class CommentInReplyTo extends SpeakeasyBase {
    /**
     * The identified of the parent of this comment.
     */
    id?: string;
}
/**
 * Data about the post containing this comment.
 */
export declare class CommentPost extends SpeakeasyBase {
    /**
     * The identifier of the post containing this comment.
     */
    id?: string;
}
/**
 * The status of the comment (only populated for admin users).
 */
export declare enum CommentStatusEnum {
    Live = "LIVE",
    Emptied = "EMPTIED",
    Pending = "PENDING",
    Spam = "SPAM"
}
/**
 * Successful response
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * The author of this Comment.
     */
    author?: CommentAuthor;
    /**
     * Data about the blog containing this comment.
     */
    blog?: CommentBlog;
    /**
     * The actual content of the comment. May include HTML markup.
     */
    content?: string;
    /**
     * The identifier for this resource.
     */
    id?: string;
    /**
     * Data about the comment this is in reply to.
     */
    inReplyTo?: CommentInReplyTo;
    /**
     * The kind of this entry. Always blogger#comment.
     */
    kind?: string;
    /**
     * Data about the post containing this comment.
     */
    post?: CommentPost;
    /**
     * RFC 3339 date-time when this comment was published.
     */
    published?: string;
    /**
     * The API REST URL to fetch this resource from.
     */
    selfLink?: string;
    /**
     * The status of the comment (only populated for admin users).
     */
    status?: CommentStatusEnum;
    /**
     * RFC 3339 date-time when this comment was last updated.
     */
    updated?: string;
}
