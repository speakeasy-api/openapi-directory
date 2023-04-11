import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1BoundingPoly } from "./googleclouddatalabelingv1beta1boundingpoly";
import { GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly } from "./googleclouddatalabelingv1beta1normalizedboundingpoly";
/**
 * Image bounding poly annotation. It represents a polygon including bounding box in the image.
 */
export declare class GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation extends SpeakeasyBase {
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     */
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * A bounding polygon in the image.
     */
    boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;
    /**
     * Normalized bounding polygon.
     */
    normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;
}
