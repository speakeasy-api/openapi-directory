import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * The sub-type of this event.
 */
export declare enum AssignmentSubtypeEnum {
    SubtypeUnspecified = "SUBTYPE_UNSPECIFIED",
    Added = "ADDED",
    Deleted = "DELETED",
    ReplyAdded = "REPLY_ADDED",
    ReplyDeleted = "REPLY_DELETED",
    Resolved = "RESOLVED",
    Reopened = "REOPENED",
    Reassigned = "REASSIGNED"
}
/**
 * A comment with an assignment.
 */
export declare class Assignment extends SpeakeasyBase {
    /**
     * Information about an end user.
     */
    assignedUser?: User;
    /**
     * The sub-type of this event.
     */
    subtype?: AssignmentSubtypeEnum;
}
