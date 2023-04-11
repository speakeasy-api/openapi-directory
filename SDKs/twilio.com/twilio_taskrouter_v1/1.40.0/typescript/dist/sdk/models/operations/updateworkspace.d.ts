import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWorkspaceServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateWorkspaceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWorkspaceUpdateWorkspaceRequest extends SpeakeasyBase {
    /**
     * The SID of the Activity that will be used when new Workers are created in the Workspace.
     */
    defaultActivitySid?: string;
    /**
     * The URL we should call when an event occurs. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio's [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
     */
    eventCallbackUrl?: string;
    /**
     * The list of Workspace events for which to call event_callback_url. For example if `EventsFilter=task.created,task.canceled,worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
     */
    eventsFilter?: string;
    /**
     * A descriptive string that you create to describe the Workspace resource. For example: `Sales Call Center` or `Customer Support Team`.
     */
    friendlyName?: string;
    /**
     * Whether to enable multi-tasking. Can be: `true` to enable multi-tasking, or `false` to disable it. However, all workspaces should be maintained as multi-tasking. There is no default when omitting this parameter. A multi-tasking Workspace can't be updated to single-tasking unless it is not a Flex Project and another (legacy) single-tasking Workspace exists. Multi-tasking allows Workers to handle multiple Tasks simultaneously. In multi-tasking mode, each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
     */
    multiTaskEnabled?: boolean;
    prioritizeQueueOrder?: shared.WorkspaceEnumQueueOrderEnum;
    /**
     * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
     */
    timeoutActivitySid?: string;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    requestBody?: UpdateWorkspaceUpdateWorkspaceRequest;
    /**
     * The SID of the Workspace resource to update.
     */
    sid: string;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1Workspace?: shared.TaskrouterV1Workspace;
}
