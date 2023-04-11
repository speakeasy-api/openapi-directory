import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubSnapshotMetadata } from "./pubsubsnapshotmetadata";
/**
 * State of the snapshot.
 */
export declare enum SnapshotStateEnum {
    UnknownSnapshotState = "UNKNOWN_SNAPSHOT_STATE",
    Pending = "PENDING",
    Running = "RUNNING",
    Ready = "READY",
    Failed = "FAILED",
    Deleted = "DELETED"
}
/**
 * Represents a snapshot of a job.
 */
export declare class Snapshot extends SpeakeasyBase {
    /**
     * The time this snapshot was created.
     */
    creationTime?: string;
    /**
     * User specified description of the snapshot. Maybe empty.
     */
    description?: string;
    /**
     * The disk byte size of the snapshot. Only available for snapshots in READY state.
     */
    diskSizeBytes?: string;
    /**
     * The unique ID of this snapshot.
     */
    id?: string;
    /**
     * The project this snapshot belongs to.
     */
    projectId?: string;
    /**
     * Pub/Sub snapshot metadata.
     */
    pubsubMetadata?: PubsubSnapshotMetadata[];
    /**
     * Cloud region where this snapshot lives in, e.g., "us-central1".
     */
    region?: string;
    /**
     * The job this snapshot was created from.
     */
    sourceJobId?: string;
    /**
     * State of the snapshot.
     */
    state?: SnapshotStateEnum;
    /**
     * The time after which this snapshot will be automatically deleted.
     */
    ttl?: string;
}
