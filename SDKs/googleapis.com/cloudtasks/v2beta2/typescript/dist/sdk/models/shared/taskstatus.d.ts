import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptStatus } from "./attemptstatus";
/**
 * Status of the task.
 */
export declare class TaskStatus extends SpeakeasyBase {
    /**
     * Output only. The number of attempts dispatched. This count includes attempts which have been dispatched but haven't received a response.
     */
    attemptDispatchCount?: number;
    /**
     * Output only. The number of attempts which have received a response. This field is not calculated for pull tasks.
     */
    attemptResponseCount?: number;
    /**
     * The status of a task attempt.
     */
    firstAttemptStatus?: AttemptStatus;
    /**
     * The status of a task attempt.
     */
    lastAttemptStatus?: AttemptStatus;
}
