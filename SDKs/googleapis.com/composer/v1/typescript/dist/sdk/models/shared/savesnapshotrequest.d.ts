import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to create a snapshot of a Cloud Composer environment.
 */
export declare class SaveSnapshotRequest extends SpeakeasyBase {
    /**
     * Location in a Cloud Storage where the snapshot is going to be stored, e.g.: "gs://my-bucket/snapshots".
     */
    snapshotLocation?: string;
}
