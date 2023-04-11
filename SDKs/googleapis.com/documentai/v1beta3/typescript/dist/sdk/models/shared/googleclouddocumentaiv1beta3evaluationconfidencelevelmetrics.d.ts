import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationMetrics } from "./googleclouddocumentaiv1beta3evaluationmetrics";
/**
 * Evaluations metrics, at a specific confidence level.
 */
export declare class GoogleCloudDocumentaiV1beta3EvaluationConfidenceLevelMetrics extends SpeakeasyBase {
    /**
     * The confidence level.
     */
    confidenceLevel?: number;
    /**
     * Evaluation metrics, either in aggregate or about a specific entity.
     */
    metrics?: GoogleCloudDocumentaiV1beta3EvaluationMetrics;
}
