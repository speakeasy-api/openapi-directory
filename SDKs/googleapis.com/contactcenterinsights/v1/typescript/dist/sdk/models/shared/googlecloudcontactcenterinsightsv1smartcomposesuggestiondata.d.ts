import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Agent Assist Smart Compose suggestion data.
 */
export declare class GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData extends SpeakeasyBase {
    /**
     * The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidenceScore?: number;
    /**
     * Map that contains metadata about the Smart Compose suggestion and the document from which it originates.
     */
    metadata?: Record<string, string>;
    /**
     * The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}
     */
    queryRecord?: string;
    /**
     * The content of the suggestion.
     */
    suggestion?: string;
}
