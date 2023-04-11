import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationReference } from "./applicationreference";
import { AppliedLabelChange } from "./appliedlabelchange";
import { Comment } from "./comment";
import { Create } from "./create";
import { DataLeakPreventionChange } from "./dataleakpreventionchange";
import { Delete } from "./delete";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { Rename } from "./rename";
import { Restore } from "./restore";
import { SettingsChange } from "./settingschange";
/**
 * Data describing the type and additional information of an action.
 */
export declare class ActionDetail extends SpeakeasyBase {
    /**
     * Label changes that were made on the Target.
     */
    appliedLabelChange?: AppliedLabelChange;
    /**
     * A change about comments on an object.
     */
    comment?: Comment;
    /**
     * An object was created.
     */
    create?: Create;
    /**
     * An object was deleted.
     */
    delete?: Delete;
    /**
     * A change in the object's data leak prevention status.
     */
    dlpChange?: DataLeakPreventionChange;
    /**
     * An empty message indicating an object was edited.
     */
    edit?: Record<string, any>;
    /**
     * An object was moved.
     */
    move?: Move;
    /**
     * A change of the permission setting on an item.
     */
    permissionChange?: PermissionChange;
    /**
     * Activity in applications other than Drive.
     */
    reference?: ApplicationReference;
    /**
     * An object was renamed.
     */
    rename?: Rename;
    /**
     * A deleted object was restored.
     */
    restore?: Restore;
    /**
     * Information about settings changes.
     */
    settingsChange?: SettingsChange;
}
