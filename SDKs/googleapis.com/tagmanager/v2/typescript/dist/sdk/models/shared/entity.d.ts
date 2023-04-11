import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { Folder } from "./folder";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
/**
 * Represents how the entity has been changed in the workspace.
 */
export declare enum EntityChangeStatusEnum {
    ChangeStatusUnspecified = "changeStatusUnspecified",
    None = "none",
    Added = "added",
    Deleted = "deleted",
    Updated = "updated"
}
/**
 * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
 */
export declare class Entity extends SpeakeasyBase {
    /**
     * Represents how the entity has been changed in the workspace.
     */
    changeStatus?: EntityChangeStatusEnum;
    client?: Client;
    /**
     * Represents a Google Tag Manager Folder.
     */
    folder?: Folder;
    /**
     * Represents a Google Tag Manager Tag.
     */
    tag?: Tag;
    /**
     * Represents a Google Tag Manager Trigger
     */
    trigger?: Trigger;
    /**
     * Represents a Google Tag Manager Variable.
     */
    variable?: Variable;
}
