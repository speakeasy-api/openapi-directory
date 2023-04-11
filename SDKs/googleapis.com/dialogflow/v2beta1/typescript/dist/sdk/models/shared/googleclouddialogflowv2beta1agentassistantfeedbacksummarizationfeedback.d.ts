import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Feedback for conversation summarization.
 */
export declare class GoogleCloudDialogflowV2beta1AgentAssistantFeedbackSummarizationFeedback extends SpeakeasyBase {
    /**
     * Timestamp when composing of the summary starts.
     */
    startTimestamp?: string;
    /**
     * Timestamp when the summary was submitted.
     */
    submitTimestamp?: string;
    /**
     * Text of actual submitted summary.
     */
    summaryText?: string;
}
