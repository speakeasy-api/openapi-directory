import { SpeakeasyBase } from "../../../internal/utils";
import { TaskEnumStatusEnum } from "./taskenumstatusenum";
/**
 * Created
 */
export declare class TaskrouterV1WorkspaceTask extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task resource.
     */
    accountSid?: string;
    /**
     * An object that contains the [addon](https://www.twilio.com/docs/taskrouter/marketplace) data for all installed addons.
     */
    addons?: string;
    /**
     * The number of seconds since the Task was created.
     */
    age?: number;
    assignmentStatus?: TaskEnumStatusEnum;
    /**
     * The JSON string with custom attributes of the work. **Note** If this property has been assigned a value, it will only be displayed in FETCH action that returns a single resource. Otherwise, it will be null.
     */
    attributes?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The current priority score of the Task as assigned to a Worker by the workflow. Tasks with higher priority values will be assigned before Tasks with lower values.
     */
    priority?: number;
    /**
     * The reason the Task was canceled or completed, if applicable.
     */
    reason?: string;
    /**
     * The unique string that we created to identify the Task resource.
     */
    sid?: string;
    /**
     * The SID of the TaskChannel.
     */
    taskChannelSid?: string;
    /**
     * The unique name of the TaskChannel.
     */
    taskChannelUniqueName?: string;
    /**
     * The date and time in GMT when the Task entered the TaskQueue, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    taskQueueEnteredDate?: Date;
    /**
     * The friendly name of the TaskQueue.
     */
    taskQueueFriendlyName?: string;
    /**
     * The SID of the TaskQueue.
     */
    taskQueueSid?: string;
    /**
     * The amount of time in seconds that the Task can live before being assigned.
     */
    timeout?: number;
    /**
     * The absolute URL of the Task resource.
     */
    url?: string;
    /**
     * The friendly name of the Workflow that is controlling the Task.
     */
    workflowFriendlyName?: string;
    /**
     * The SID of the Workflow that is controlling the Task.
     */
    workflowSid?: string;
    /**
     * The SID of the Workspace that contains the Task.
     */
    workspaceSid?: string;
}
