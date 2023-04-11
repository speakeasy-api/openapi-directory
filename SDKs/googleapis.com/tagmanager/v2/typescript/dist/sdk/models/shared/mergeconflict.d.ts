import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * Represents a merge conflict.
 */
export declare class MergeConflict extends SpeakeasyBase {
    /**
     * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
     */
    entityInBaseVersion?: Entity;
    /**
     * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
     */
    entityInWorkspace?: Entity;
}
