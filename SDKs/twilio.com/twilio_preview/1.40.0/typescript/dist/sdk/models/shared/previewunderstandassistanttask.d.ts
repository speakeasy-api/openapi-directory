import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewUnderstandAssistantTask extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Task.
     */
    accountSid?: string;
    /**
     * User-provided HTTP endpoint where from the assistant fetches actions
     */
    actionsUrl?: string;
    /**
     * The unique ID of the Assistant.
     */
    assistantSid?: string;
    /**
     * The date that this resource was created
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated
     */
    dateUpdated?: Date;
    /**
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName?: string;
    links?: Record<string, any>;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string;
    url?: string;
}
