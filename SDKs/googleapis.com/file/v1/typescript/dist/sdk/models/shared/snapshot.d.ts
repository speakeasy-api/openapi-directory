import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Filestore snapshot.
 */
export declare class SnapshotInput extends SpeakeasyBase {
    /**
     * A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.
     */
    description?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
}
/**
 * Output only. The snapshot state.
 */
export declare enum SnapshotStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING"
}
/**
 * A Filestore snapshot.
 */
export declare class Snapshot extends SpeakeasyBase {
    /**
     * Output only. The time when the snapshot was created.
     */
    createTime?: string;
    /**
     * A description of the snapshot with 2048 characters or less. Requests with longer descriptions will be rejected.
     */
    description?: string;
    /**
     * Output only. The amount of bytes needed to allocate a full copy of the snapshot content
     */
    filesystemUsedBytes?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`.
     */
    name?: string;
    /**
     * Output only. The snapshot state.
     */
    state?: SnapshotStateEnum;
}
