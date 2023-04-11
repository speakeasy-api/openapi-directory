import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
     */
    accountSid?: string;
    /**
     * An object that contains the cumulative statistics for the TaskQueue.
     */
    cumulative?: any;
    /**
     * An object that contains the real-time statistics for the TaskQueue.
     */
    realtime?: any;
    /**
     * The SID of the TaskQueue from which these statistics were calculated.
     */
    taskQueueSid?: string;
    /**
     * The absolute URL of the TaskQueue statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the TaskQueue.
     */
    workspaceSid?: string;
}
