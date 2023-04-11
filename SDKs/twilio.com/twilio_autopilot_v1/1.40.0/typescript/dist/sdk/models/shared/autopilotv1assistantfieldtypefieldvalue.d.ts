import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AutopilotV1AssistantFieldTypeFieldValue extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the FieldValue resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource.
     */
    assistantSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Field Type associated with the Field Value.
     */
    fieldTypeSid?: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US`
     */
    language?: string;
    /**
     * The unique string that we created to identify the FieldValue resource.
     */
    sid?: string;
    /**
     * The word for which the field value is a synonym of.
     */
    synonymOf?: string;
    /**
     * The absolute URL of the FieldValue resource.
     */
    url?: string;
    /**
     * The Field Value data.
     */
    value?: string;
}
