import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ConfusionMatrix } from "./googleclouddatalabelingv1beta1confusionmatrix";
import { GoogleCloudDatalabelingV1beta1PrCurve } from "./googleclouddatalabelingv1beta1prcurve";
/**
 * Metrics calculated for a classification model.
 */
export declare class GoogleCloudDatalabelingV1beta1ClassificationMetrics extends SpeakeasyBase {
    /**
     * Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.
     */
    confusionMatrix?: GoogleCloudDatalabelingV1beta1ConfusionMatrix;
    prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
}
