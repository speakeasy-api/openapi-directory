import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionInfo, EncryptionInfoInput } from "./encryptioninfo";
/**
 * Output only. The current state of the backup.
 */
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}
/**
 * A backup of a Cloud Bigtable table.
 */
export declare class Backup extends SpeakeasyBase {
    /**
     * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
     */
    encryptionInfo?: EncryptionInfo;
    /**
     * Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp.
     */
    endTime?: string;
    /**
     * Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.
     */
    expireTime?: string;
    /**
     * A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
     */
    name?: string;
    /**
     * Output only. Size of the backup in bytes.
     */
    sizeBytes?: string;
    /**
     * Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/.
     */
    sourceBackup?: string;
    /**
     * Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`.
     */
    sourceTable?: string;
    /**
     * Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp.
     */
    startTime?: string;
    /**
     * Output only. The current state of the backup.
     */
    state?: BackupStateEnum;
}
/**
 * A backup of a Cloud Bigtable table.
 */
export declare class BackupInput extends SpeakeasyBase {
    /**
     * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
     */
    encryptionInfo?: EncryptionInfoInput;
    /**
     * Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.
     */
    expireTime?: string;
    /**
     * A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.
     */
    name?: string;
    /**
     * Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`.
     */
    sourceTable?: string;
}
