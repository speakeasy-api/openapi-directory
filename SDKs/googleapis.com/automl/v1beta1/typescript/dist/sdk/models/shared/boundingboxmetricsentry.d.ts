import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntryConfidenceMetricsEntry } from "./boundingboxmetricsentryconfidencemetricsentry";
/**
 * Bounding box matching model metrics for a single intersection-over-union threshold and multiple label match confidence thresholds.
 */
export declare class BoundingBoxMetricsEntry extends SpeakeasyBase {
    /**
     * Output only. Metrics for each label-match confidence_threshold from 0.05,0.10,...,0.95,0.96,0.97,0.98,0.99. Precision-recall curve is derived from them.
     */
    confidenceMetricsEntries?: BoundingBoxMetricsEntryConfidenceMetricsEntry[];
    /**
     * Output only. The intersection-over-union threshold value used to compute this metrics entry.
     */
    iouThreshold?: number;
    /**
     * Output only. The mean average precision, most often close to au_prc.
     */
    meanAveragePrecision?: number;
}
