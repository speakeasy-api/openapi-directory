import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PreviewUnderstandAssistantTaskSample extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Sample.
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
     * An ISO language-country string of the sample.
     */
    language?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
     */
    sourceChannel?: string;
    /**
     * The text example of how end-users may express this task. The sample may contain Field tag blocks.
     */
    taggedText?: string;
    /**
     * The unique ID of the Task associated with this Sample.
     */
    taskSid?: string;
    url?: string;
}
