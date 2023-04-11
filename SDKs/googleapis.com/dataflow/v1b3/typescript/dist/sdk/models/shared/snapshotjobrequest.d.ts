import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to create a snapshot of a job.
 */
export declare class SnapshotJobRequest extends SpeakeasyBase {
    /**
     * User specified description of the snapshot. Maybe empty.
     */
    description?: string;
    /**
     * The location that contains this job.
     */
    location?: string;
    /**
     * If true, perform snapshots for sources which support this.
     */
    snapshotSources?: boolean;
    /**
     * TTL for the snapshot.
     */
    ttl?: string;
}
