import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions } from "./googleclouddatalabelingv1beta1boundingboxevaluationoptions";
/**
 * Configuration details used for calculating evaluation metrics and creating an Evaluation.
 */
export declare class GoogleCloudDatalabelingV1beta1EvaluationConfig extends SpeakeasyBase {
    /**
     * Options regarding evaluation between bounding boxes.
     */
    boundingBoxEvaluationOptions?: GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
}
