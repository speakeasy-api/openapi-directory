import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generated summary for a conversation.
 */
export declare class GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary extends SpeakeasyBase {
    /**
     * The name of the answer record. Format: "projects//answerRecords/"
     */
    answerRecord?: string;
    /**
     * The summary content that is concatenated into one string.
     */
    text?: string;
    /**
     * The summary content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value.
     */
    textSections?: Record<string, string>;
}
