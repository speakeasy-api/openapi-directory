import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkspaceStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
     */
    accountSid?: string;
    /**
     * An object that contains the cumulative statistics for the Workspace.
     */
    cumulative?: any;
    /**
     * An object that contains the real-time statistics for the Workspace.
     */
    realtime?: any;
    /**
     * The absolute URL of the Workspace statistics resource.
     */
    url?: string;
    /**
     * The SID of the Workspace.
     */
    workspaceSid?: string;
}
