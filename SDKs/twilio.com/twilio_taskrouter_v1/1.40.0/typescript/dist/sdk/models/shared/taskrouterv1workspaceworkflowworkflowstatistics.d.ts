import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TaskrouterV1WorkspaceWorkflowWorkflowStatistics extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
     */
    accountSid?: string;
    /**
     * An object that contains the cumulative statistics for the Workflow.
     */
    cumulative?: any;
    /**
     * An object that contains the real-time statistics for the Workflow.
     */
    realtime?: any;
    /**
     * The absolute URL of the Workflow statistics resource.
     */
    url?: string;
    /**
     * Returns the list of Tasks that are being controlled by the Workflow with the specified SID value.
     */
    workflowSid?: string;
    /**
     * The SID of the Workspace that contains the Workflow.
     */
    workspaceSid?: string;
}
