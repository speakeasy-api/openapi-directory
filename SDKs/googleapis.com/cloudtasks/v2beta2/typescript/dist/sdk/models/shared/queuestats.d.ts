import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics for a queue.
 */
export declare class QueueStats extends SpeakeasyBase {
    /**
     * Output only. The number of requests that the queue has dispatched but has not received a reply for yet.
     */
    concurrentDispatchesCount?: string;
    /**
     * Output only. The current maximum number of tasks per second executed by the queue. The maximum value of this variable is controlled by the RateLimits of the Queue. However, this value could be less to avoid overloading the endpoints tasks in the queue are targeting.
     */
    effectiveExecutionRate?: number;
    /**
     * Output only. The number of tasks that the queue has dispatched and received a reply for during the last minute. This variable counts both successful and non-successful executions.
     */
    executedLastMinuteCount?: string;
    /**
     * Output only. An estimation of the nearest time in the future where a task in the queue is scheduled to be executed.
     */
    oldestEstimatedArrivalTime?: string;
    /**
     * Output only. An estimation of the number of tasks in the queue, that is, the tasks in the queue that haven't been executed, the tasks in the queue which the queue has dispatched but has not yet received a reply for, and the failed tasks that the queue is retrying.
     */
    tasksCount?: string;
}
