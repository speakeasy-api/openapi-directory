import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the config of disk options for a group of VM instances.
 */
export declare class DiskConfig extends SpeakeasyBase {
    /**
     * Optional. Size in GB of the boot disk (default is 500GB).
     */
    bootDiskSizeGb?: number;
    /**
     * Optional. Type of the boot disk (default is "pd-standard"). Valid values: "pd-balanced" (Persistent Disk Balanced Solid State Drive), "pd-ssd" (Persistent Disk Solid State Drive), or "pd-standard" (Persistent Disk Hard Disk Drive). See Disk types (https://cloud.google.com/compute/docs/disks#disk-types).
     */
    bootDiskType?: string;
    /**
     * Optional. Interface type of local SSDs (default is "scsi"). Valid values: "scsi" (Small Computer System Interface), "nvme" (Non-Volatile Memory Express). See local SSD performance (https://cloud.google.com/compute/docs/disks/local-ssd#performance).
     */
    localSsdInterface?: string;
    /**
     * Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected.
     */
    numLocalSsds?: number;
}
