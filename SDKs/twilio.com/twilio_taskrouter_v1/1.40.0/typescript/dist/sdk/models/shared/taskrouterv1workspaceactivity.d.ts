import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TaskrouterV1WorkspaceActivity extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Activity resource.
     */
    accountSid?: string;
    /**
     * Whether the Worker is eligible to receive a Task when it occupies the Activity. A value of `true`, `1`, or `yes` indicates the Activity is available. All other values indicate that it is not. The value cannot be changed after the Activity is created.
     */
    available?: boolean;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the Activity resource.
     */
    friendlyName?: string;
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Activity resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Activity resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Activity.
     */
    workspaceSid?: string;
}
