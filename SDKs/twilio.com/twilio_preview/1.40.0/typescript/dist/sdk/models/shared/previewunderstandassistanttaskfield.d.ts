import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewUnderstandAssistantTaskField extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid?: string;
    /**
     * The unique ID of the parent Assistant.
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
     * The Field Type of this field. It can be any [Built-in Field Type](https://www.twilio.com/docs/assistant/api/built-in-field-types) or the unique_name or sid of a custom Field Type.
     */
    fieldType?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid?: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName?: string;
    url?: string;
}
