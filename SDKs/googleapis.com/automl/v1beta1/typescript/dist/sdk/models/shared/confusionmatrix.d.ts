import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationEvaluationMetricsConfusionMatrixRow } from "./classificationevaluationmetricsconfusionmatrixrow";
/**
 * Confusion matrix of the model running the classification.
 */
export declare class ConfusionMatrix extends SpeakeasyBase {
    /**
     * Output only. IDs of the annotation specs used in the confusion matrix. For Tables CLASSIFICATION prediction_type only list of annotation_spec_display_name-s is populated.
     */
    annotationSpecId?: string[];
    /**
     * Output only. Display name of the annotation specs used in the confusion matrix, as they were at the moment of the evaluation. For Tables CLASSIFICATION prediction_type-s, distinct values of the target column at the moment of the model evaluation are populated here.
     */
    displayName?: string[];
    /**
     * Output only. Rows in the confusion matrix. The number of rows is equal to the size of `annotation_spec_id`. `row[i].example_count[j]` is the number of examples that have ground truth of the `annotation_spec_id[i]` and are predicted as `annotation_spec_id[j]` by the model being evaluated.
     */
    row?: ClassificationEvaluationMetricsConfusionMatrixRow[];
}
