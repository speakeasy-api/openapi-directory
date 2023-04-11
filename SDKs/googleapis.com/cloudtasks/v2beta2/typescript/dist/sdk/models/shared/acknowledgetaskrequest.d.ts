import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for acknowledging a task using AcknowledgeTask.
 */
export declare class AcknowledgeTaskRequest extends SpeakeasyBase {
    /**
     * Required. The task's current schedule time, available in the schedule_time returned by LeaseTasks response or RenewLease response. This restriction is to ensure that your worker currently holds the lease.
     */
    scheduleTime?: string;
}
