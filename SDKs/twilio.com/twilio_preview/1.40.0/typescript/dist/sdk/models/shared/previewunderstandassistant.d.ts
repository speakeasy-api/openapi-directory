import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewUnderstandAssistant extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Assistant.
     */
    accountSid?: string;
    /**
     * Space-separated list of callback events that will trigger callbacks.
     */
    callbackEvents?: string;
    /**
     * A user-provided URL to send event callbacks to.
     */
    callbackUrl?: string;
    /**
     * The date that this resource was created
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated
     */
    dateUpdated?: Date;
    /**
     * A text description for the Assistant. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * The unique ID (Sid) of the latest model build. Null if no model has been built.
     */
    latestModelBuildSid?: string;
    links?: Record<string, any>;
    /**
     * A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter.
     */
    logQueries?: boolean;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. You can use the unique name in the URL path. Unique up to 64 characters long.
     */
    uniqueName?: string;
    url?: string;
}
