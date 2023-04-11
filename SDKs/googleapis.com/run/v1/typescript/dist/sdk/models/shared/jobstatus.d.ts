import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionReference } from "./executionreference";
import { GoogleCloudRunV1Condition } from "./googlecloudrunv1condition";
/**
 * JobStatus represents the current state of a Job.
 */
export declare class JobStatus extends SpeakeasyBase {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Job-specific conditions include: * `Ready`: `True` when the job is ready to be executed.
     */
    conditions?: GoogleCloudRunV1Condition[];
    /**
     * Number of executions created for this job.
     */
    executionCount?: number;
    /**
     * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
     */
    latestCreatedExecution?: ExecutionReference;
    /**
     * The 'generation' of the job that was last processed by the controller.
     */
    observedGeneration?: number;
}
