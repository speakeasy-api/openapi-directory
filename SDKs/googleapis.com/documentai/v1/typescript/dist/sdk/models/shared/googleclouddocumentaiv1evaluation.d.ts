import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1EvaluationCounters } from "./googleclouddocumentaiv1evaluationcounters";
import { GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics } from "./googleclouddocumentaiv1evaluationmulticonfidencemetrics";
/**
 * An evaluation of a ProcessorVersion's performance.
 */
export declare class GoogleCloudDocumentaiV1Evaluation extends SpeakeasyBase {
    /**
     * Metrics across multiple confidence levels.
     */
    allEntitiesMetrics?: GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics;
    /**
     * The time that the evaluation was created.
     */
    createTime?: string;
    /**
     * Evaluation counters for the documents that were used.
     */
    documentCounters?: GoogleCloudDocumentaiV1EvaluationCounters;
    /**
     * Metrics across confidence levels, for different entities.
     */
    entityMetrics?: Record<string, GoogleCloudDocumentaiV1EvaluationMultiConfidenceMetrics>;
    /**
     * The KMS key name used for encryption.
     */
    kmsKeyName?: string;
    /**
     * The KMS key version with which data is encrypted.
     */
    kmsKeyVersionName?: string;
    /**
     * The resource name of the evaluation. Format: `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}/evaluations/{evaluation}`
     */
    name?: string;
}
