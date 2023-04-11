import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateClassificationMetrics } from "./aggregateclassificationmetrics";
import { BinaryConfusionMatrix } from "./binaryconfusionmatrix";
/**
 * Evaluation metrics for binary classification/classifier models.
 */
export declare class BinaryClassificationMetrics extends SpeakeasyBase {
    /**
     * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
     */
    aggregateClassificationMetrics?: AggregateClassificationMetrics;
    /**
     * Binary confusion matrix at multiple thresholds.
     */
    binaryConfusionMatrixList?: BinaryConfusionMatrix[];
    /**
     * Label representing the negative class.
     */
    negativeLabel?: string;
    /**
     * Label representing the positive class.
     */
    positiveLabel?: string;
}
