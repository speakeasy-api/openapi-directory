import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Operation to apply on the entity.
 */
export declare enum ChangeOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace",
    Move = "move",
    Copy = "copy",
    Test = "test"
}
/**
 * This class defines the Changes on the Publish API
 */
export declare class Change extends SpeakeasyBase {
    /**
     * Json path of the source entity when using the move operation.
     */
    from?: string;
    /**
     * Operation to apply on the entity.
     */
    op: ChangeOpEnum;
    /**
     * Json path from the root of the document to the place where the change should be applied.
     */
    path: string;
    /**
     * Data to change. MUST be a valid json object.
     */
    value?: Record<string, any>;
}
