import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EphemeralStorageLocalSsdConfig contains configuration for the node ephemeral storage using Local SSD.
 */
export declare class EphemeralStorageLocalSsdConfig extends SpeakeasyBase {
    /**
     * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
     */
    localSsdCount?: number;
}
