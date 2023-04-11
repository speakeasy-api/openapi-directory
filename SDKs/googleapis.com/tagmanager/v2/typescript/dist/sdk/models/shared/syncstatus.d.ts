import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of a workspace after synchronization.
 */
export declare class SyncStatus extends SpeakeasyBase {
    /**
     * Synchornization operation detected a merge conflict.
     */
    mergeConflict?: boolean;
    /**
     * An error occurred during the synchronization operation.
     */
    syncError?: boolean;
}
