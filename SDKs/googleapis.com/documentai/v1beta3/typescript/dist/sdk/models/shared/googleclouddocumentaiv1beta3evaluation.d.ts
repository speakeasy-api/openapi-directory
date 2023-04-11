import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3EvaluationCounters } from "./googleclouddocumentaiv1beta3evaluationcounters";
import { GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics } from "./googleclouddocumentaiv1beta3evaluationmulticonfidencemetrics";
/**
 * An evaluation of a ProcessorVersion's performance.
 */
export declare class GoogleCloudDocumentaiV1beta3Evaluation extends SpeakeasyBase {
    /**
     * Metrics across multiple confidence levels.
     */
    allEntitiesMetrics?: GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics;
    /**
     * The time that the evaluation was created.
     */
    createTime?: string;
    /**
     * Evaluation counters for the documents that were used.
     */
    documentCounters?: GoogleCloudDocumentaiV1beta3EvaluationCounters;
    /**
     * Metrics across confidence levels, for different entities.
     */
    entityMetrics?: Record<string, GoogleCloudDocumentaiV1beta3EvaluationMultiConfidenceMetrics>;
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
