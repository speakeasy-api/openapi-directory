import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Actor info specific to YouTube clients.
 */
export declare class CommentActorClientSpecificActorInfoYoutubeActorInfo extends SpeakeasyBase {
    /**
     * ID of the YouTube channel owned by the Actor.
     */
    channelId?: string;
}
/**
 * Actor info specific to particular clients.
 */
export declare class CommentActorClientSpecificActorInfo extends SpeakeasyBase {
    /**
     * Actor info specific to YouTube clients.
     */
    youtubeActorInfo?: CommentActorClientSpecificActorInfoYoutubeActorInfo;
}
/**
 * The image representation of this actor.
 */
export declare class CommentActorImage extends SpeakeasyBase {
    /**
     * The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
     */
    url?: string;
}
/**
 * Verification status of actor.
 */
export declare class CommentActorVerification extends SpeakeasyBase {
    /**
     * Verification for one-time or manual processes.
     */
    adHocVerified?: string;
}
/**
 * The person who posted this comment.
 */
export declare class CommentActor extends SpeakeasyBase {
    /**
     * Actor info specific to particular clients.
     */
    clientSpecificActorInfo?: CommentActorClientSpecificActorInfo;
    /**
     * The name of this actor, suitable for display.
     */
    displayName?: string;
    /**
     * The ID of the actor.
     */
    id?: string;
    /**
     * The image representation of this actor.
     */
    image?: CommentActorImage;
    /**
     * A link to the Person resource for this actor.
     */
    url?: string;
    /**
     * Verification status of actor.
     */
    verification?: CommentActorVerification;
}
export declare class CommentInReplyTo extends SpeakeasyBase {
    /**
     * The ID of the activity.
     */
    id?: string;
    /**
     * The URL of the activity.
     */
    url?: string;
}
/**
 * The object of this comment.
 */
export declare class CommentObject extends SpeakeasyBase {
    /**
     * The HTML-formatted content, suitable for display.
     */
    content?: string;
    /**
     * The object type of this comment. Possible values are:
     *
     * @remarks
     * - "comment" - A comment in reply to an activity.
     */
    objectType?: string;
    /**
     * The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request.
     */
    originalContent?: string;
}
/**
 * People who +1'd this comment.
 */
export declare class CommentPlusoners extends SpeakeasyBase {
    /**
     * Total number of people who +1'd this comment.
     */
    totalItems?: number;
}
/**
 * Successful response
 */
export declare class Comment extends SpeakeasyBase {
    /**
     * The person who posted this comment.
     */
    actor?: CommentActor;
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ID of this comment.
     */
    id?: string;
    /**
     * The activity this comment replied to.
     */
    inReplyTo?: CommentInReplyTo[];
    /**
     * Identifies this resource as a comment. Value: "plus#comment".
     */
    kind?: string;
    /**
     * The object of this comment.
     */
    object?: CommentObject;
    /**
     * People who +1'd this comment.
     */
    plusoners?: CommentPlusoners;
    /**
     * The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
     */
    published?: Date;
    /**
     * Link to this comment resource.
     */
    selfLink?: string;
    /**
     * The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
     */
    updated?: Date;
    /**
     * This comment's verb, indicating what action was performed. Possible values are:
     *
     * @remarks
     * - "post" - Publish content to the stream.
     */
    verb?: string;
}
