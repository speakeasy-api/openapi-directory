import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Feedback for conversation summarization.
 */
export declare class GoogleCloudDialogflowV2AgentAssistantFeedbackSummarizationFeedback extends SpeakeasyBase {
    /**
     * Timestamp when composing of the summary starts.
     */
    startTime?: string;
    /**
     * Timestamp when the summary was submitted.
     */
    submitTime?: string;
    /**
     * Text of actual submitted summary.
     */
    summaryText?: string;
}
