import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The unit that 'retained_backups' represents.
 */
export declare enum BackupRetentionSettingsRetentionUnitEnum {
    RetentionUnitUnspecified = "RETENTION_UNIT_UNSPECIFIED",
    Count = "COUNT"
}
/**
 * We currently only support backup retention by specifying the number of backups we will retain.
 */
export declare class BackupRetentionSettings extends SpeakeasyBase {
    /**
     * Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups.
     */
    retainedBackups?: number;
    /**
     * The unit that 'retained_backups' represents.
     */
    retentionUnit?: BackupRetentionSettingsRetentionUnitEnum;
}
