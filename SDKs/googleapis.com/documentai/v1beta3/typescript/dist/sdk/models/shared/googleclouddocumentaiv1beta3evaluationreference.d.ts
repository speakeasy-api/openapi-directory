import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationMetrics } from "./googleclouddocumentaiv1beta3evaluationmetrics";
/**
 * Gives a short summary of an evaluation, and links to the evaluation itself.
 */
export declare class GoogleCloudDocumentaiV1beta3EvaluationReference extends SpeakeasyBase {
    /**
     * Evaluation metrics, either in aggregate or about a specific entity.
     */
    aggregateMetrics?: GoogleCloudDocumentaiV1beta3EvaluationMetrics;
    /**
     * Evaluation metrics, either in aggregate or about a specific entity.
     */
    aggregateMetricsExact?: GoogleCloudDocumentaiV1beta3EvaluationMetrics;
    /**
     * The resource name of the evaluation.
     */
    evaluation?: string;
    /**
     * The resource name of the Long Running Operation for the evaluation.
     */
    operation?: string;
}
