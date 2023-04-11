import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskrouterV1WorkspaceTaskQueueTaskQueuesStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
     */
    accountSid?: string;
    /**
     * An object that contains the cumulative statistics for the TaskQueues.
     */
    cumulative?: any;
    /**
     * An object that contains the real-time statistics for the TaskQueues.
     */
    realtime?: any;
    /**
     * The SID of the TaskQueue from which these statistics were calculated.
     */
    taskQueueSid?: string;
    /**
     * The SID of the Workspace that contains the TaskQueues.
     */
    workspaceSid?: string;
}
