import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetricsConfidenceMetricsEntry } from "./classificationevaluationmetricsconfidencemetricsentry";
import { ConfusionMatrix } from "./confusionmatrix";
/**
 * Model evaluation metrics for classification problems. Note: For Video Classification this metrics only describe quality of the Video Classification predictions of "segment_classification" type.
 */
export declare class ClassificationEvaluationMetrics extends SpeakeasyBase {
    /**
     * Output only. The annotation spec ids used for this evaluation.
     */
    annotationSpecId?: string[];
    /**
     * Output only. The Area Under Precision-Recall Curve metric. Micro-averaged for the overall evaluation.
     */
    auPrc?: number;
    /**
     * Output only. The Area Under Receiver Operating Characteristic curve metric. Micro-averaged for the overall evaluation.
     */
    auRoc?: number;
    /**
     * Output only. The Area Under Precision-Recall Curve metric based on priors. Micro-averaged for the overall evaluation. Deprecated.
     */
    baseAuPrc?: number;
    /**
     * Output only. Metrics for each confidence_threshold in 0.00,0.05,0.10,...,0.95,0.96,0.97,0.98,0.99 and position_threshold = INT32_MAX_VALUE. ROC and precision-recall curves, and other aggregated metrics are derived from them. The confidence metrics entries may also be supplied for additional values of position_threshold, but from these no aggregated metrics are computed.
     */
    confidenceMetricsEntry?: ClassificationEvaluationMetricsConfidenceMetricsEntry[];
    /**
     * Confusion matrix of the model running the classification.
     */
    confusionMatrix?: ConfusionMatrix;
    /**
     * Output only. The Log Loss metric.
     */
    logLoss?: number;
}
