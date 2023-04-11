import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1NormalizedPolyline } from "./googleclouddatalabelingv1beta1normalizedpolyline";
import { GoogleCloudDatalabelingV1beta1Polyline } from "./googleclouddatalabelingv1beta1polyline";
/**
 * A polyline for the image annotation.
 */
export declare class GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation extends SpeakeasyBase {
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     */
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Normalized polyline.
     */
    normalizedPolyline?: GoogleCloudDatalabelingV1beta1NormalizedPolyline;
    /**
     * A line with multiple line segments.
     */
    polyline?: GoogleCloudDatalabelingV1beta1Polyline;
}
