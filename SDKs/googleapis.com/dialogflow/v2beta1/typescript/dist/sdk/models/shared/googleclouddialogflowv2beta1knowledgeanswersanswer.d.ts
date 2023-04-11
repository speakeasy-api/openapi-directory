import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
 */
export declare enum GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum {
    MatchConfidenceLevelUnspecified = "MATCH_CONFIDENCE_LEVEL_UNSPECIFIED",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH"
}
/**
 * An answer from Knowledge Connector.
 */
export declare class GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer extends SpeakeasyBase {
    /**
     * The piece of text from the `source` knowledge base document that answers this conversational query.
     */
    answer?: string;
    /**
     * The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise.
     */
    faqQuestion?: string;
    /**
     * The system's confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
     */
    matchConfidence?: number;
    /**
     * The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
     */
    matchConfidenceLevel?: GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswerMatchConfidenceLevelEnum;
    /**
     * Indicates which Knowledge Document this answer was extracted from. Format: `projects//knowledgeBases//documents/`.
     */
    source?: string;
}
