import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation } from "./googleclouddatalabelingv1beta1imageboundingpolyannotation";
import { GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation } from "./googleclouddatalabelingv1beta1imageclassificationannotation";
import { GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation } from "./googleclouddatalabelingv1beta1imagepolylineannotation";
import { GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation } from "./googleclouddatalabelingv1beta1imagesegmentationannotation";
import { GoogleCloudDatalabelingV1beta1TextClassificationAnnotation } from "./googleclouddatalabelingv1beta1textclassificationannotation";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation } from "./googleclouddatalabelingv1beta1textentityextractionannotation";
import { GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation } from "./googleclouddatalabelingv1beta1videoclassificationannotation";
import { GoogleCloudDatalabelingV1beta1VideoEventAnnotation } from "./googleclouddatalabelingv1beta1videoeventannotation";
import { GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation } from "./googleclouddatalabelingv1beta1videoobjecttrackingannotation";
/**
 * Annotation value for an example.
 */
export declare class GoogleCloudDatalabelingV1beta1AnnotationValue extends SpeakeasyBase {
    /**
     * Image bounding poly annotation. It represents a polygon including bounding box in the image.
     */
    imageBoundingPolyAnnotation?: GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation;
    /**
     * Image classification annotation definition.
     */
    imageClassificationAnnotation?: GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation;
    /**
     * A polyline for the image annotation.
     */
    imagePolylineAnnotation?: GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;
    /**
     * Image segmentation annotation.
     */
    imageSegmentationAnnotation?: GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation;
    /**
     * Text classification annotation.
     */
    textClassificationAnnotation?: GoogleCloudDatalabelingV1beta1TextClassificationAnnotation;
    /**
     * Text entity extraction annotation.
     */
    textEntityExtractionAnnotation?: GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation;
    /**
     * Video classification annotation.
     */
    videoClassificationAnnotation?: GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation;
    /**
     * Video event annotation.
     */
    videoEventAnnotation?: GoogleCloudDatalabelingV1beta1VideoEventAnnotation;
    /**
     * Video object tracking annotation.
     */
    videoObjectTrackingAnnotation?: GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation;
}
