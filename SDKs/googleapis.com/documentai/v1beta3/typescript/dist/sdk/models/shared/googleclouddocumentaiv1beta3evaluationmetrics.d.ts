import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics, either in aggregate or about a specific entity.
 */
export declare class GoogleCloudDocumentaiV1beta3EvaluationMetrics extends SpeakeasyBase {
    /**
     * The calculated f1 score.
     */
    f1Score?: number;
    /**
     * The amount of false negatives.
     */
    falseNegativesCount?: number;
    /**
     * The amount of false positives.
     */
    falsePositivesCount?: number;
    /**
     * The amount of documents with a ground truth occurrence.
     */
    groundTruthDocumentCount?: number;
    /**
     * The amount of occurrences in ground truth documents.
     */
    groundTruthOccurrencesCount?: number;
    /**
     * The calculated precision.
     */
    precision?: number;
    /**
     * The amount of documents with a predicted occurrence.
     */
    predictedDocumentCount?: number;
    /**
     * The amount of occurrences in predicted documents.
     */
    predictedOccurrencesCount?: number;
    /**
     * The calculated recall.
     */
    recall?: number;
    /**
     * The amount of documents that had an occurrence of this label.
     */
    totalDocumentsCount?: number;
    /**
     * The amount of true positives.
     */
    truePositivesCount?: number;
}
