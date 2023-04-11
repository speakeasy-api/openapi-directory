import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Agent Assist frequently-asked-question answer data.
 */
export declare class GoogleCloudContactcenterinsightsV1FaqAnswerData extends SpeakeasyBase {
    /**
     * The piece of text from the `source` knowledge base document.
     */
    answer?: string;
    /**
     * The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number;
    /**
     * Map that contains metadata about the FAQ answer and the document that it originates from.
     */
    metadata?: Record<string, string>;
    /**
     * The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}
     */
    queryRecord?: string;
    /**
     * The corresponding FAQ question.
     */
    question?: string;
    /**
     * The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}.
     */
    source?: string;
}
