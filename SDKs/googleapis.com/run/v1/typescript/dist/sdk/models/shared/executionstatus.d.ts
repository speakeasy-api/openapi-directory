import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * ExecutionStatus represents the current state of an Execution.
 */
export declare class ExecutionStatus extends SpeakeasyBase {
    /**
     * Optional. The number of tasks which reached phase Cancelled.
     */
    cancelledCount?: number;
    /**
     * Optional. Represents the time that the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string;
    /**
     * Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Execution-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `Started`: `True` when the execution has started to execute. * `Completed`: `True` when the execution has succeeded. `False` when the execution has failed.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * Optional. The number of tasks which reached phase Failed.
     */
    failedCount?: number;
    /**
     * Optional. URI where logs for this execution can be found in Cloud Console.
     */
    logUri?: string;
    /**
     * Optional. The 'generation' of the execution that was last processed by the controller.
     */
    observedGeneration?: number;
    /**
     * Optional. The number of tasks which have retried at least once.
     */
    retriedCount?: number;
    /**
     * Optional. The number of actively running tasks.
     */
    runningCount?: number;
    /**
     * Optional. Represents the time that the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     */
    startTime?: string;
    /**
     * Optional. The number of tasks which reached phase Succeeded.
     */
    succeededCount?: number;
}
