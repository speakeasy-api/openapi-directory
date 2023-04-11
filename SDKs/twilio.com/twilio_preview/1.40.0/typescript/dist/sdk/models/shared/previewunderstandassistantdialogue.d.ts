import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class PreviewUnderstandAssistantDialogue extends SpeakeasyBase {
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid?: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid?: string;
    /**
     * The dialogue memory object as json
     */
    data?: any;
    /**
     * The unique ID of the Dialogue
     */
    sid?: string;
    url?: string;
}
