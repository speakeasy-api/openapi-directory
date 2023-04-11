import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TaskrouterV1WorkspaceWorker extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker resource.
     */
    accountSid?: string;
    /**
     * The `friendly_name` of the Worker's current Activity.
     */
    activityName?: string;
    /**
     * The SID of the Worker's current Activity.
     */
    activitySid?: string;
    /**
     * The JSON string that describes the Worker. For example: `{ "email": "Bob@example.com", "phone": "+5095551234" }`. **Note** If this property has been assigned a value, it will only be displayed in FETCH actions that return a single resource. Otherwise, this property will be null, even if it has a value. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker.
     */
    attributes?: string;
    /**
     * Whether the Worker is available to perform tasks.
     */
    available?: boolean;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT of the last change to the Worker's activity specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Used to calculate Workflow statistics.
     */
    dateStatusChanged?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource. Friendly names are case insensitive, and unique within the TaskRouter Workspace.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Worker resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Worker resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Worker.
     */
    workspaceSid?: string;
}
