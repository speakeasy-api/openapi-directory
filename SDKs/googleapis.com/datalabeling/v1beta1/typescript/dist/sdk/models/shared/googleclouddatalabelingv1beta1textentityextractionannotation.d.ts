import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1SequentialSegment } from "./googleclouddatalabelingv1beta1sequentialsegment";
/**
 * Text entity extraction annotation.
 */
export declare class GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation extends SpeakeasyBase {
    /**
     * Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
     */
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    /**
     * Start and end position in a sequence (e.g. text segment).
     */
    sequentialSegment?: GoogleCloudDatalabelingV1beta1SequentialSegment;
}
