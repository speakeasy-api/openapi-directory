import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWorkflowServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateWorkflowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWorkflowCreateWorkflowRequest extends SpeakeasyBase {
    /**
     * The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details.
     */
    assignmentCallbackUrl?: string;
    /**
     * A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
     */
    configuration: string;
    /**
     * The URL that we should call when a call to the `assignment_callback_url` fails.
     */
    fallbackAssignmentCallbackUrl?: string;
    /**
     * A descriptive string that you create to describe the Workflow resource. For example, `Inbound Call Workflow` or `2014 Outbound Campaign`.
     */
    friendlyName: string;
    /**
     * How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
     */
    taskReservationTimeout?: number;
}
export declare class CreateWorkflowRequest extends SpeakeasyBase {
    requestBody?: CreateWorkflowCreateWorkflowRequest;
    /**
     * The SID of the Workspace that the new Workflow to create belongs to.
     */
    workspaceSid: string;
}
export declare class CreateWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskrouterV1WorkspaceWorkflow?: shared.TaskrouterV1WorkspaceWorkflow;
}
