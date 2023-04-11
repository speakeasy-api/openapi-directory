import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTaskCreateTaskRequest extends SpeakeasyBase {
    /**
     * A URL-encoded JSON string with the attributes of the new task. This value is passed to the Workflow's `assignment_callback_url` when the Task is assigned to a Worker. For example: `{ "task_type": "call", "twilio_call_sid": "CAxxx", "customer_ticket_number": "12345" }`.
     */
    attributes?: string;
    /**
     * The priority to assign the new task and override the default. When supplied, the new Task will have this priority unless it matches a Workflow Target with a Priority set. When not supplied, the new Task will have the priority of the matching Workflow Target. Value can be 0 to 2^31^ (2,147,483,647).
     */
    priority?: number;
    /**
     * When MultiTasking is enabled, specify the TaskChannel by passing either its `unique_name` or `sid`. Default value is `default`.
     */
    taskChannel?: string;
    /**
     * The amount of time in seconds the new task can live before being assigned. Can be up to a maximum of 2 weeks (1,209,600 seconds). The default value is 24 hours (86,400 seconds). On timeout, the `task.canceled` event will fire with description `Task TTL Exceeded`.
     */
    timeout?: number;
    /**
     * The SID of the Workflow that you would like to handle routing for the new Task. If there is only one Workflow defined for the Workspace that you are posting the new task to, this parameter is optional.
     */
    workflowSid?: string;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    requestBody?: CreateTaskCreateTaskRequest;
    /**
     * The SID of the Workspace that the new Task belongs to.
     */
    workspaceSid: string;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
