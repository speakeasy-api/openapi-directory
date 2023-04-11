import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TaskrouterV1WorkspaceTaskChannel extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task Channel resource.
     */
    accountSid?: string;
    /**
     * Whether the Task Channel will prioritize Workers that have been idle. When `true`, Workers that have been idle the longest are prioritized.
     */
    channelOptimizedRouting?: boolean;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Task Channel resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Task Channel resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Task Channel.
     */
    workspaceSid?: string;
}
