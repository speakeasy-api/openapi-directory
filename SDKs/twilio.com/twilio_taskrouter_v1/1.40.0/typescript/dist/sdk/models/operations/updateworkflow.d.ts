import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateWorkflowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWorkflowUpdateWorkflowRequest extends SpeakeasyBase {
    /**
     * The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details.
     */
    assignmentCallbackUrl?: string;
    /**
     * A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
     */
    configuration?: string;
    /**
     * The URL that we should call when a call to the `assignment_callback_url` fails.
     */
    fallbackAssignmentCallbackUrl?: string;
    /**
     * A descriptive string that you create to describe the Workflow resource. For example, `Inbound Call Workflow` or `2014 Outbound Campaign`.
     */
    friendlyName?: string;
    /**
     * Whether or not to re-evaluate Tasks. The default is `false`, which means Tasks in the Workflow will not be processed through the assignment loop again.
     */
    reEvaluateTasks?: string;
    /**
     * How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
     */
    taskReservationTimeout?: number;
}
export declare class UpdateWorkflowRequest extends SpeakeasyBase {
    requestBody?: UpdateWorkflowUpdateWorkflowRequest;
    /**
     * The SID of the Workflow resource to update.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Workflow to update.
     */
    workspaceSid: string;
}
export declare class UpdateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
