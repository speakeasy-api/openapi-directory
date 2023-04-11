import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
/**
 * The execution state of this task.
 */
export declare enum GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum {
    TaskExecutionStateUnspecified = "TASK_EXECUTION_STATE_UNSPECIFIED",
    PendingExecution = "PENDING_EXECUTION",
    InProcess = "IN_PROCESS",
    Succeed = "SUCCEED",
    Failed = "FAILED",
    Fatal = "FATAL",
    RetryOnHold = "RETRY_ON_HOLD",
    Skipped = "SKIPPED",
    Cancelled = "CANCELLED",
    PendingRollback = "PENDING_ROLLBACK",
    RollbackInProcess = "ROLLBACK_IN_PROCESS",
    Rolledback = "ROLLEDBACK",
    Suspended = "SUSPENDED"
}
/**
 * Contains the details of the execution of this task.
 */
export declare class GoogleCloudIntegrationsV1alphaTaskExecutionDetails extends SpeakeasyBase {
    /**
     * Status for the current task execution attempt.
     */
    taskAttemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];
    /**
     * The execution state of this task.
     */
    taskExecutionState?: GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum;
    /**
     * Pointer to the task config it used for execution.
     */
    taskNumber?: string;
}
