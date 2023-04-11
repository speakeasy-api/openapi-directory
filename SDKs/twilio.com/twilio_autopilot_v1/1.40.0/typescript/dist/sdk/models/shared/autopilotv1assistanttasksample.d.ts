import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AutopilotV1AssistantTaskSample extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sample resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
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
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
     */
    language?: string;
    /**
     * The unique string that we created to identify the Sample resource.
     */
    sid?: string;
    /**
     * The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
     */
    sourceChannel?: string;
    /**
     * The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
     */
    taggedText?: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
     */
    taskSid?: string;
    /**
     * The absolute URL of the Sample resource.
     */
    url?: string;
}
