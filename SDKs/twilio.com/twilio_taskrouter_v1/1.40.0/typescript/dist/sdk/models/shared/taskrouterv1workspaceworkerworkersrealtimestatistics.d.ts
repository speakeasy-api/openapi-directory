import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
     */
    accountSid?: string;
    /**
     * The number of current Workers by Activity.
     */
    activityStatistics?: any[];
    /**
     * The total number of Workers.
     */
    totalWorkers?: number;
    /**
     * The absolute URL of the Workers statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Workers.
     */
    workspaceSid?: string;
}
