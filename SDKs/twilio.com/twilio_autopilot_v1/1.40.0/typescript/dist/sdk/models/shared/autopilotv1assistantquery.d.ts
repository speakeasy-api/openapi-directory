import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class AutopilotV1AssistantQuery extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Query resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
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
     * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
     */
    dialogueSid?: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query. For example: `en-US`.
     */
    language?: string;
    /**
     * The SID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried.
     */
    modelBuildSid?: string;
    /**
     * The end-user's natural language input.
     */
    query?: string;
    /**
     * The natural language analysis results that include the [Task](https://www.twilio.com/docs/autopilot/api/task) recognized and a list of identified [Fields](https://www.twilio.com/docs/autopilot/api/task-field).
     */
    results?: any;
    /**
     * The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
     */
    sampleSid?: string;
    /**
     * The unique string that we created to identify the Query resource.
     */
    sid?: string;
    /**
     * The communication channel from where the end-user input came.
     */
    sourceChannel?: string;
    /**
     * The status of the Query. Can be: `pending-review`, `reviewed`, or `discarded`
     */
    status?: string;
    /**
     * The absolute URL of the Query resource.
     */
    url?: string;
}
