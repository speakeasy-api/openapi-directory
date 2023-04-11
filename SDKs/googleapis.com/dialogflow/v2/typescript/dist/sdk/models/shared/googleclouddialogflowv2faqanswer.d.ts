import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents answer from "frequently asked questions".
 */
export declare class GoogleCloudDialogflowV2FaqAnswer extends SpeakeasyBase {
    /**
     * The piece of text from the `source` knowledge base document.
     */
    answer?: string;
    /**
     * The name of answer record, in the format of "projects//locations//answerRecords/"
     */
    answerRecord?: string;
    /**
     * The system's confidence score that this Knowledge answer is a good match for this conversational query, range from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number;
    /**
     * A map that contains metadata about the answer and the document from which it originates.
     */
    metadata?: Record<string, string>;
    /**
     * The corresponding FAQ question.
     */
    question?: string;
    /**
     * Indicates which Knowledge Document this answer was extracted from. Format: `projects//locations//agent/knowledgeBases//documents/`.
     */
    source?: string;
}
