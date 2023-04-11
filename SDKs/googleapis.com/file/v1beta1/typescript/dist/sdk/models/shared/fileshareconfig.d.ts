import { SpeakeasyBase } from "../../../internal/utils";
import { NfsExportOptions } from "./nfsexportoptions";
/**
 * File share configuration for the instance.
 */
export declare class FileShareConfig extends SpeakeasyBase {
    /**
     * File share capacity in gigabytes (GB). Filestore defines 1 GB as 1024^3 bytes.
     */
    capacityGb?: string;
    /**
     * The name of the file share (must be 32 characters or less for Enterprise and High Scale SSD tiers and 16 characters or less for all other tiers).
     */
    name?: string;
    /**
     * Nfs Export Options. There is a limit of 10 export options per file share.
     */
    nfsExportOptions?: NfsExportOptions[];
    /**
     * The resource name of the backup, in the format `projects/{project_id}/locations/{location_id}/backups/{backup_id}`, that this file share has been restored from.
     */
    sourceBackup?: string;
}
