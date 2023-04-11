import { SpeakeasyBase } from "../../../internal/utils";
/**
 * LocalNvmeSsdBlockConfig contains configuration for using raw-block local NVMe SSDs
 */
export declare class LocalNvmeSsdBlockConfig extends SpeakeasyBase {
    /**
     * The number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size. If zero, it means no raw-block local NVMe SSD disks to be attached to the node. The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
     */
    localSsdCount?: number;
}
