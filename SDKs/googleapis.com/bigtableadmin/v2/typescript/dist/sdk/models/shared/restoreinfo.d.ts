import { SpeakeasyBase } from "../../../internal/utils";
import { BackupInfo } from "./backupinfo";
/**
 * The type of the restore source.
 */
export declare enum RestoreInfoSourceTypeEnum {
    RestoreSourceTypeUnspecified = "RESTORE_SOURCE_TYPE_UNSPECIFIED",
    Backup = "BACKUP"
}
/**
 * Information about a table restore.
 */
export declare class RestoreInfoInput extends SpeakeasyBase {
    /**
     * The type of the restore source.
     */
    sourceType?: RestoreInfoSourceTypeEnum;
}
/**
 * Information about a table restore.
 */
export declare class RestoreInfo extends SpeakeasyBase {
    /**
     * Information about a backup.
     */
    backupInfo?: BackupInfo;
    /**
     * The type of the restore source.
     */
    sourceType?: RestoreInfoSourceTypeEnum;
}
