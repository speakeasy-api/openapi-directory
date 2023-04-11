import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ReplicatingStep contains specific step details.
 */
export declare class ReplicatingStep extends SpeakeasyBase {
    /**
     * The source disks replication rate for the last 30 minutes in bytes per second.
     */
    lastThirtyMinutesAverageBytesPerSecond?: string;
    /**
     * The source disks replication rate for the last 2 minutes in bytes per second.
     */
    lastTwoMinutesAverageBytesPerSecond?: string;
    /**
     * Replicated bytes in the step.
     */
    replicatedBytes?: string;
    /**
     * Total bytes to be handled in the step.
     */
    totalBytes?: string;
}
