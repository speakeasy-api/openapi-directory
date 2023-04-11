import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
import { MergeConflict } from "./mergeconflict";
/**
 * The changes that have occurred in the workspace since the base container version.
 */
export declare class GetWorkspaceStatusResponse extends SpeakeasyBase {
    /**
     * The merge conflict after sync.
     */
    mergeConflict?: MergeConflict[];
    /**
     * Entities that have been changed in the workspace.
     */
    workspaceChange?: Entity[];
}
