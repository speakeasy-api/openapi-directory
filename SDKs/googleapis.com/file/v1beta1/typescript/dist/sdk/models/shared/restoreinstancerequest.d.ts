import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RestoreInstanceRequest restores an existing instance's file share from a backup.
 */
export declare class RestoreInstanceRequest extends SpeakeasyBase {
    /**
     * Required. Name of the file share in the Filestore instance that the backup is being restored to.
     */
    fileShare?: string;
    /**
     * The resource name of the backup, in the format `projects/{project_id}/locations/{location_id}/backups/{backup_id}`.
     */
    sourceBackup?: string;
    /**
     * The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/snapshots/{snapshot_id}`.
     */
    sourceSnapshot?: string;
}
