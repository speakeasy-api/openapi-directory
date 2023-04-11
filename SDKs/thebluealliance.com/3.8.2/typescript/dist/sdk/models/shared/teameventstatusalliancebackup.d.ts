import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Backup status, may be null.
 */
export declare class TeamEventStatusAllianceBackup extends SpeakeasyBase {
    /**
     * TBA key for the backup team called in.
     */
    in?: string;
    /**
     * TBA key for the team replaced by the backup.
     */
    out?: string;
}
