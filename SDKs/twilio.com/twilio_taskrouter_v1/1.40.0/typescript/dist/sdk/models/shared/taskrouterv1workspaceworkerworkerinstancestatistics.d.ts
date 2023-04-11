import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
     */
    accountSid?: string;
    /**
     * An object that contains the cumulative statistics for the Worker.
     */
    cumulative?: any;
    /**
     * The absolute URL of the WorkerChannel statistics resource.
     */
    url?: string;
    /**
     * The SID of the Worker that contains the WorkerChannel.
     */
    workerSid?: string;
    /**
     * The SID of the Workspace that contains the WorkerChannel.
     */
    workspaceSid?: string;
}
