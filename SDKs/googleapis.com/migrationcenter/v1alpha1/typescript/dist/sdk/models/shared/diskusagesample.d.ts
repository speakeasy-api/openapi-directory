import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Disk usage sample. Values are across all disks.
 */
export declare class DiskUsageSample extends SpeakeasyBase {
    /**
     * Average IOPS sampled over a short window. Must be non-negative.
     */
    averageIops?: number;
}
