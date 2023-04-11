import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. A row in the confusion matrix.
 */
export declare class ClassificationEvaluationMetricsConfusionMatrixRow extends SpeakeasyBase {
    /**
     * Output only. Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the `annotation_spec_id` field or, if that one is not populated, length of the display_name field.
     */
    exampleCount?: number[];
}
