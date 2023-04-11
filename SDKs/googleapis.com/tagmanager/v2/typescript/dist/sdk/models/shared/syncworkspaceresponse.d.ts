import { SpeakeasyBase } from "../../../internal/utils";
import { MergeConflict } from "./mergeconflict";
import { SyncStatus } from "./syncstatus";
/**
 * A response after synchronizing the workspace to the latest container version.
 */
export declare class SyncWorkspaceResponse extends SpeakeasyBase {
    /**
     * The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved.
     */
    mergeConflict?: MergeConflict[];
    /**
     * The status of a workspace after synchronization.
     */
    syncStatus?: SyncStatus;
}
