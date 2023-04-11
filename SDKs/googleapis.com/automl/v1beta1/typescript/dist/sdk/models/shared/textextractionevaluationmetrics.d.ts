import { SpeakeasyBase } from "../../../internal/utils";
import { TextExtractionEvaluationMetricsConfidenceMetricsEntry } from "./textextractionevaluationmetricsconfidencemetricsentry";
/**
 * Model evaluation metrics for text extraction problems.
 */
export declare class TextExtractionEvaluationMetrics extends SpeakeasyBase {
    /**
     * Output only. The Area under precision recall curve metric.
     */
    auPrc?: number;
    /**
     * Output only. Metrics that have confidence thresholds. Precision-recall curve can be derived from it.
     */
    confidenceMetricsEntries?: TextExtractionEvaluationMetricsConfidenceMetricsEntry[];
}
