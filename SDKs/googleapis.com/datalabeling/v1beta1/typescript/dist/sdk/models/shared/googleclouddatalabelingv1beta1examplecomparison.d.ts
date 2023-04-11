import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";
/**
 * Example comparisons comparing ground truth output and predictions for a specific input.
 */
export declare class GoogleCloudDatalabelingV1beta1ExampleComparison extends SpeakeasyBase {
    /**
     * An Example is a piece of data and its annotation. For example, an image with label "house".
     */
    groundTruthExample?: GoogleCloudDatalabelingV1beta1Example;
    /**
     * Predictions by the model for the input.
     */
    modelCreatedExamples?: GoogleCloudDatalabelingV1beta1Example[];
}
