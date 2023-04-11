import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkerWorkerStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
     */
    accountSid?: string;
    /**
     * An object that contains the cumulative statistics for the Worker.
     */
    cumulative?: any;
    /**
     * An object that contains the real-time statistics for the Worker.
     */
    realtime?: any;
    /**
     * The absolute URL of the Worker statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Worker.
     */
    workspaceSid?: string;
}
