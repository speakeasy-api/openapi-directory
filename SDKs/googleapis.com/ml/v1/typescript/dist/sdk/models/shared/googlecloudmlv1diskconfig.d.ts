import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the config of disk options.
 */
export declare class GoogleCloudMlV1DiskConfig extends SpeakeasyBase {
    /**
     * Size in GB of the boot disk (default is 100GB).
     */
    bootDiskSizeGb?: number;
    /**
     * Type of the boot disk (default is "pd-ssd"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive).
     */
    bootDiskType?: string;
}
