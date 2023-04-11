import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
/**
 * Image segmentation annotation.
 */
export declare class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation extends SpeakeasyBase {
    /**
     * The mapping between rgb color and annotation spec. The key is the rgb color represented in format of rgb(0, 0, 0). The value is the AnnotationSpec.
     */
    annotationColors?: Record<string, GoogleCloudDatalabelingV1beta1AnnotationSpec>;
    /**
     * A byte string of a full image's color map.
     */
    imageBytes?: string;
    /**
     * Image format.
     */
    mimeType?: string;
}
