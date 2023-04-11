import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SoundCloud User object
 */
export declare class CommentUser extends SpeakeasyBase {
    /**
     * URL to a JPEG image.
     */
    avatarUrl?: string;
    /**
     * number of followers.
     */
    followersCount?: number;
    /**
     * number of followed users.
     */
    followingsCount?: number;
    /**
     * unique identifier
     */
    id?: number;
    /**
     * kind of resource.
     */
    kind?: string;
    /**
     * last modified timestamp.
     */
    lastModified?: string;
    /**
     * permalink of the resource.
     */
    permalink?: string;
    /**
     * URL to the SoundCloud.com page.
     */
    permalinkUrl?: string;
    /**
     * number of reposts from user
     */
    repostsCount?: number;
    /**
     * API resource URL.
     */
    uri?: string;
    /**
     * username
     */
    username?: string;
}
/**
 * User's Comment
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * Comment body.
     */
    body?: string;
    /**
     * Created timestamp.
     */
    createdAt?: string;
    /**
     * Identifier.
     */
    id?: number;
    /**
     * Kind (comment).
     */
    kind?: string;
    /**
     * Timestamp.
     */
    timestamp?: string;
    /**
     * Track's identifier.
     */
    trackId?: number;
    /**
     * Comment's URL.
     */
    uri?: string;
    /**
     * SoundCloud User object
     */
    user?: CommentUser;
    /**
     * User's identifier.
     */
    userId?: number;
}
