import { SpeakeasyBase } from "../../../internal/utils";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { Rename } from "./rename";
import { Target } from "./target";
import { User } from "./user";
export declare enum EventAdditionalEventTypesEnum {
    Comment = "comment",
    Create = "create",
    Edit = "edit",
    EmptyTrash = "emptyTrash",
    Move = "move",
    PermissionChange = "permissionChange",
    Rename = "rename",
    Trash = "trash",
    Unknown = "unknown",
    Untrash = "untrash",
    Upload = "upload"
}
/**
 * The main type of event that occurred.
 */
export declare enum EventPrimaryEventTypeEnum {
    Comment = "comment",
    Create = "create",
    Edit = "edit",
    EmptyTrash = "emptyTrash",
    Move = "move",
    PermissionChange = "permissionChange",
    Rename = "rename",
    Trash = "trash",
    Unknown = "unknown",
    Untrash = "untrash",
    Upload = "upload"
}
/**
 * Represents the changes associated with an action taken by a user.
 */
export declare class Event extends SpeakeasyBase {
    /**
     * Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event.
     */
    additionalEventTypes?: EventAdditionalEventTypesEnum[];
    /**
     * The time at which the event occurred formatted as Unix time in milliseconds.
     */
    eventTimeMillis?: string;
    /**
     * Whether this event is caused by a user being deleted.
     */
    fromUserDeletion?: boolean;
    /**
     * Contains information about changes in an object's parents as a result of a move type event.
     */
    move?: Move;
    /**
     * Extra information for permissionChange type events, such as the user or group the new permission applies to.
     */
    permissionChanges?: PermissionChange[];
    /**
     * The main type of event that occurred.
     */
    primaryEventType?: EventPrimaryEventTypeEnum;
    /**
     * Contains information about a renametype event.
     */
    rename?: Rename;
    /**
     * Information about the object modified by the event.
     */
    target?: Target;
    /**
     * A representation of a user.
     */
    user?: User;
}
