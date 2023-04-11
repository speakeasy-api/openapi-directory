import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ClassificationMetrics } from "./googleclouddatalabelingv1beta1classificationmetrics";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics } from "./googleclouddatalabelingv1beta1objectdetectionmetrics";
export declare class GoogleCloudDatalabelingV1beta1EvaluationMetrics extends SpeakeasyBase {
    /**
     * Metrics calculated for a classification model.
     */
    classificationMetrics?: GoogleCloudDatalabelingV1beta1ClassificationMetrics;
    /**
     * Metrics calculated for an image object detection (bounding box) model.
     */
    objectDetectionMetrics?: GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics;
}
