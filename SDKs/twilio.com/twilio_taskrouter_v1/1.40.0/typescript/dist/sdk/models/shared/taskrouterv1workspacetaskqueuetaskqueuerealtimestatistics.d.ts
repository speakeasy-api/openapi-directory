import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
     */
    accountSid?: string;
    /**
     * The number of current Workers by Activity.
     */
    activityStatistics?: any[];
    /**
     * The relative age in the TaskQueue for the longest waiting Task. Calculation is based on the time when the Task entered the TaskQueue.
     */
    longestRelativeTaskAgeInQueue?: number;
    /**
     * The Task SID of the Task waiting in the TaskQueue the longest. Calculation is based on the time when the Task entered the TaskQueue.
     */
    longestRelativeTaskSidInQueue?: string;
    /**
     * The age of the longest waiting Task.
     */
    longestTaskWaitingAge?: number;
    /**
     * The SID of the longest waiting Task.
     */
    longestTaskWaitingSid?: string;
    /**
     * The SID of the TaskQueue from which these statistics were calculated.
     */
    taskQueueSid?: string;
    /**
     * The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99.
     */
    tasksByPriority?: any;
    /**
     * The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`.
     */
    tasksByStatus?: any;
    /**
     * The total number of Workers available for Tasks in the TaskQueue.
     */
    totalAvailableWorkers?: number;
    /**
     * The total number of Workers eligible for Tasks in the TaskQueue, independent of their Activity state.
     */
    totalEligibleWorkers?: number;
    /**
     * The total number of Tasks.
     */
    totalTasks?: number;
    /**
     * The absolute URL of the TaskQueue statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the TaskQueue.
     */
    workspaceSid?: string;
}
