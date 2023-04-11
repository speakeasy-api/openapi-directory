import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The sub-type of this event.
 */
export declare enum SuggestionSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED",
    Added = "ADDED",
    Deleted = "DELETED",
    ReplyAdded = "REPLY_ADDED",
    ReplyDeleted = "REPLY_DELETED",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    AcceptDeleted = "ACCEPT_DELETED",
    RejectDeleted = "REJECT_DELETED"
}
/**
 * A suggestion.
 */
export declare class Suggestion extends SpeakeasyBase {
    /**
     * The sub-type of this event.
     */
    subtype?: SuggestionSubtypeEnum;
}
