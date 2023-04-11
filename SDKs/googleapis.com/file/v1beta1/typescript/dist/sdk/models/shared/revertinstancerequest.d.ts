import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RevertInstanceRequest reverts the given instance's file share to the specified snapshot.
 */
export declare class RevertInstanceRequest extends SpeakeasyBase {
    /**
     * Required. The snapshot resource ID, in the format 'my-snapshot', where the specified ID is the {snapshot_id} of the fully qualified name like projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}
     */
    targetSnapshotId?: string;
}
