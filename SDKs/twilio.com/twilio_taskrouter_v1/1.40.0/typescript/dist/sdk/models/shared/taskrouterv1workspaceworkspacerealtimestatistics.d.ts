import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkspaceRealTimeStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
     */
    accountSid?: string;
    /**
     * The number of current Workers by Activity.
     */
    activityStatistics?: any[];
    /**
     * The age of the longest waiting Task.
     */
    longestTaskWaitingAge?: number;
    /**
     * The SID of the longest waiting Task.
     */
    longestTaskWaitingSid?: string;
    /**
     * The number of Tasks by priority. For example: `{"0": "10", "99": "5"}` shows 10 Tasks at priority 0 and 5 at priority 99.
     */
    tasksByPriority?: any;
    /**
     * The number of Tasks by their current status. For example: `{"pending": "1", "reserved": "3", "assigned": "2", "completed": "5"}`.
     */
    tasksByStatus?: any;
    /**
     * The total number of Tasks.
     */
    totalTasks?: number;
    /**
     * The total number of Workers in the Workspace.
     */
    totalWorkers?: number;
    /**
     * The absolute URL of the Workspace statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace.
     */
    workspaceSid?: string;
}
