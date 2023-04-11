import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The sub-type of this event.
 */
export declare enum PostSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED",
    Added = "ADDED",
    Deleted = "DELETED",
    ReplyAdded = "REPLY_ADDED",
    ReplyDeleted = "REPLY_DELETED",
    Resolved = "RESOLVED",
    Reopened = "REOPENED"
}
/**
 * A regular posted comment.
 */
export declare class Post extends SpeakeasyBase {
    /**
     * The sub-type of this event.
     */
    subtype?: PostSubtypeEnum;
}
