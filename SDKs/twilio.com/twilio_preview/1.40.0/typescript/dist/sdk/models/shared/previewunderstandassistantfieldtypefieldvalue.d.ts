import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewUnderstandAssistantFieldTypeFieldValue extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Field Value.
     */
    accountSid?: string;
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
     * The unique ID of the Field Type associated with this Field Value.
     */
    fieldTypeSid?: string;
    /**
     * An ISO language-country string of the value.
     */
    language?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
     */
    synonymOf?: string;
    url?: string;
    /**
     * The Field Value itself.
     */
    value?: string;
}
