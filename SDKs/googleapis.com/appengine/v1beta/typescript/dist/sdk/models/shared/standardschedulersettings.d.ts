import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scheduler settings for standard environment.
 */
export declare class StandardSchedulerSettings extends SpeakeasyBase {
    /**
     * Maximum number of instances to run for this version. Set to zero to disable max_instances configuration.
     */
    maxInstances?: number;
    /**
     * Minimum number of instances to run for this version. Set to zero to disable min_instances configuration.
     */
    minInstances?: number;
    /**
     * Target CPU utilization ratio to maintain when scaling.
     */
    targetCpuUtilization?: number;
    /**
     * Target throughput utilization ratio to maintain when scaling
     */
    targetThroughputUtilization?: number;
}
