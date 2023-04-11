import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Batch compute resources associated with the task.
 */
export declare class GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources extends SpeakeasyBase {
    /**
     * Optional. Total number of job executors. Executor Count should be between 2 and 100. Default=2
     */
    executorsCount?: number;
    /**
     * Optional. Max configurable executors. If max_executors_count > executors_count, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. Default=1000
     */
    maxExecutorsCount?: number;
}
