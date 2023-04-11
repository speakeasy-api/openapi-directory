import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceEnumQueueOrderEnum } from "./workspaceenumqueueorderenum";
/**
 * Created
 */
export declare class TaskrouterV1Workspace extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workspace resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The name of the default activity.
     */
    defaultActivityName?: string;
    /**
     * The SID of the Activity that will be used when new Workers are created in the Workspace.
     */
    defaultActivitySid?: string;
    /**
     * The URL we call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio's [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
     */
    eventCallbackUrl?: string;
    /**
     * The list of Workspace events for which to call `event_callback_url`. For example, if `EventsFilter=task.created, task.canceled, worker.activity.update`, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
     */
    eventsFilter?: string;
    /**
     * The string that you assigned to describe the Workspace resource. For example `Customer Support` or `2014 Election Campaign`.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * Whether multi-tasking is enabled. The default is `true`, which enables multi-tasking. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (`true`), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking each Worker would only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
     */
    multiTaskEnabled?: boolean;
    prioritizeQueueOrder?: WorkspaceEnumQueueOrderEnum;
    /**
     * The unique string that we created to identify the Workspace resource.
     */
    sid?: string;
    /**
     * The name of the timeout activity.
     */
    timeoutActivityName?: string;
    /**
     * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
     */
    timeoutActivitySid?: string;
    /**
     * The absolute URL of the Workspace resource.
     */
    url?: string;
}
