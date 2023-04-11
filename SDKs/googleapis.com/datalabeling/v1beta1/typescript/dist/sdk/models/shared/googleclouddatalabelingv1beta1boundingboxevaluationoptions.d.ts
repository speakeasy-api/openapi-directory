import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options regarding evaluation between bounding boxes.
 */
export declare class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions extends SpeakeasyBase {
    /**
     * Minimum [intersection-over-union (IOU)](/vision/automl/object-detection/docs/evaluate#intersection-over-union) required for 2 bounding boxes to be considered a match. This must be a number between 0 and 1.
     */
    iouThreshold?: number;
}
