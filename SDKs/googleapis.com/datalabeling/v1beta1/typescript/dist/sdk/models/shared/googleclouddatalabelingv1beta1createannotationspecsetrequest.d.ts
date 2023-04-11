import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSet } from "./googleclouddatalabelingv1beta1annotationspecset";
/**
 * Request message for CreateAnnotationSpecSet.
 */
export declare class GoogleCloudDatalabelingV1beta1CreateAnnotationSpecSetRequest extends SpeakeasyBase {
    /**
     * An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
     */
    annotationSpecSet?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet;
}
