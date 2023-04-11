import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1EvaluationMetrics } from "./googleclouddocumentaiv1evaluationmetrics";
/**
 * Evaluations metrics, at a specific confidence level.
 */
export declare class GoogleCloudDocumentaiV1EvaluationConfidenceLevelMetrics extends SpeakeasyBase {
    /**
     * The confidence level.
     */
    confidenceLevel?: number;
    /**
     * Evaluation metrics, either in aggregate or about a specific entity.
     */
    metrics?: GoogleCloudDocumentaiV1EvaluationMetrics;
}
