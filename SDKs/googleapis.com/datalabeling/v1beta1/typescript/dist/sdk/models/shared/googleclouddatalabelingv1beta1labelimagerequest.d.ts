import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
/**
 * Required. The type of image labeling task.
 */
export declare enum GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    Classification = "CLASSIFICATION",
    BoundingBox = "BOUNDING_BOX",
    OrientedBoundingBox = "ORIENTED_BOUNDING_BOX",
    BoundingPoly = "BOUNDING_POLY",
    Polyline = "POLYLINE",
    Segmentation = "SEGMENTATION"
}
/**
 * Request message for starting an image labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1LabelImageRequest extends SpeakeasyBase {
    /**
     * Configuration for how human labeling task should be done.
     */
    basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Config for image bounding poly (and bounding box) human labeling task.
     */
    boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    /**
     * Required. The type of image labeling task.
     */
    feature?: GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum;
    /**
     * Config for image classification human labeling task.
     */
    imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    /**
     * Config for image polyline human labeling task.
     */
    polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;
    /**
     * Config for image segmentation
     */
    segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
}
