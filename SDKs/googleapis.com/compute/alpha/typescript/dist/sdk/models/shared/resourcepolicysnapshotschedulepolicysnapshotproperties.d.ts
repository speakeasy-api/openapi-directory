import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specified snapshot properties for scheduled snapshots created by this policy.
 */
export declare class ResourcePolicySnapshotSchedulePolicySnapshotProperties extends SpeakeasyBase {
    /**
     * Chain name that the snapshot is created in.
     */
    chainName?: string;
    /**
     * Indication to perform a 'guest aware' snapshot.
     */
    guestFlush?: boolean;
    /**
     * Labels to apply to scheduled snapshots. These can be later modified by the setLabels method. Label values may be empty.
     */
    labels?: Record<string, string>;
    /**
     * Cloud Storage bucket storage location of the auto snapshot (regional or multi-regional).
     */
    storageLocations?: string[];
}
