import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTaskServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTaskUpdateTaskRequest extends SpeakeasyBase {
    assignmentStatus?: shared.TaskEnumStatusEnum;
    /**
     * The JSON string that describes the custom attributes of the task.
     */
    attributes?: string;
    /**
     * The Task's new priority value. When supplied, the Task takes on the specified priority unless it matches a Workflow Target with a Priority set. Value can be 0 to 2^31^ (2,147,483,647).
     */
    priority?: number;
    /**
     * The reason that the Task was canceled or completed. This parameter is required only if the Task is canceled or completed. Setting this value queues the task for deletion and logs the reason.
     */
    reason?: string;
    /**
     * When MultiTasking is enabled, specify the TaskChannel with the task to update. Can be the TaskChannel's SID or its `unique_name`, such as `voice`, `sms`, or `default`.
     */
    taskChannel?: string;
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    /**
     * If provided, applies this mutation if (and only if) the [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header of the Task matches the provided value. This matches the semantics of (and is implemented with) the HTTP [If-Match header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Match).
     */
    ifMatch?: string;
    requestBody?: UpdateTaskUpdateTaskRequest;
    /**
     * The SID of the Task resource to update.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Task to update.
     */
    workspaceSid: string;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTask?: shared.TaskrouterV1WorkspaceTask;
}
