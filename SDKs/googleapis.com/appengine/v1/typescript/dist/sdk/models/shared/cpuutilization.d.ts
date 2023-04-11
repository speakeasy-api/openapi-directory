import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Target scaling by CPU usage.
 */
export declare class CpuUtilization extends SpeakeasyBase {
    /**
     * Period of time over which CPU utilization is calculated.
     */
    aggregationWindowLength?: string;
    /**
     * Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.
     */
    targetUtilization?: number;
}
