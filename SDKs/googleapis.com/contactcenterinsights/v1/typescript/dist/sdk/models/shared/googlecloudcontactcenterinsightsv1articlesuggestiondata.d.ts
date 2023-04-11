import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Agent Assist Article Suggestion data.
 */
export declare class GoogleCloudContactcenterinsightsV1ArticleSuggestionData extends SpeakeasyBase {
    /**
     * The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number;
    /**
     * Map that contains metadata about the Article Suggestion and the document that it originates from.
     */
    metadata?: Record<string, string>;
    /**
     * The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}
     */
    queryRecord?: string;
    /**
     * The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}
     */
    source?: string;
    /**
     * Article title.
     */
    title?: string;
    /**
     * Article URI.
     */
    uri?: string;
}
