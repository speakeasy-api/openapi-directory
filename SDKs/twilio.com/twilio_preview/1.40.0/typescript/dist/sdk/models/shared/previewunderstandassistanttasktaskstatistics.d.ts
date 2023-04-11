import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewUnderstandAssistantTaskTaskStatistics extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid?: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string;
    /**
     * The total number of Fields associated with this Task.
     */
    fieldsCount?: number;
    /**
     * The total number of Samples associated with this Task.
     */
    samplesCount?: number;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid?: string;
    url?: string;
}
