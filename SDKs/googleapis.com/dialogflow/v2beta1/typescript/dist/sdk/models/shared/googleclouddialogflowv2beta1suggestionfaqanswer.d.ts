import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents suggested answer from "frequently asked questions".
 */
export declare class GoogleCloudDialogflowV2beta1SuggestionFaqAnswer extends SpeakeasyBase {
    /**
     * Output only. The piece of text from the `source` knowledge base document.
     */
    answer?: string;
    /**
     * Output only. The name of answer record, in the format of "projects//locations//answerRecords/"
     */
    answerRecord?: string;
    /**
     * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number;
    /**
     * Output only. A map that contains metadata about the answer and the document from which it originates.
     */
    metadata?: Record<string, string>;
    /**
     * Output only. The corresponding FAQ question.
     */
    question?: string;
    /**
     * Output only. Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`.
     */
    source?: string;
}
