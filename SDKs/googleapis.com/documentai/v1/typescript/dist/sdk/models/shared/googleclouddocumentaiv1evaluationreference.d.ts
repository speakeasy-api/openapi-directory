import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1EvaluationMetrics } from "./googleclouddocumentaiv1evaluationmetrics";
/**
 * Gives a short summary of an evaluation, and links to the evaluation itself.
 */
export declare class GoogleCloudDocumentaiV1EvaluationReference extends SpeakeasyBase {
    /**
     * Evaluation metrics, either in aggregate or about a specific entity.
     */
    aggregateMetrics?: GoogleCloudDocumentaiV1EvaluationMetrics;
    /**
     * Evaluation metrics, either in aggregate or about a specific entity.
     */
    aggregateMetricsExact?: GoogleCloudDocumentaiV1EvaluationMetrics;
    /**
     * The resource name of the evaluation.
     */
    evaluation?: string;
    /**
     * The resource name of the Long Running Operation for the evaluation.
     */
    operation?: string;
}
