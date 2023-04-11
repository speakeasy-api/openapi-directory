import { SpeakeasyBase } from "../../../internal/utils";
/**
 * EphemeralStorageConfig contains configuration for the ephemeral storage filesystem.
 */
export declare class EphemeralStorageConfig extends SpeakeasyBase {
    /**
     * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD is 375 GB in size. If zero, it means to disable using local SSDs as ephemeral storage.
     */
    localSsdCount?: number;
}
