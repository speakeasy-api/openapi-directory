import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";
/**
 * Metadata on AnnotatedDataset.
 */
export declare class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata extends SpeakeasyBase {
    /**
     * Config for image bounding poly (and bounding box) human labeling task.
     */
    boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;
    /**
     * Config for video event human labeling task.
     */
    eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;
    /**
     * Configuration for how human labeling task should be done.
     */
    humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Config for image classification human labeling task.
     */
    imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;
    /**
     * Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
     */
    objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
    /**
     * Config for video object tracking human labeling task.
     */
    objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
    /**
     * Config for image polyline human labeling task.
     */
    polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;
    /**
     * Config for image segmentation
     */
    segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;
    /**
     * Config for text classification human labeling task.
     */
    textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
    /**
     * Config for text entity extraction human labeling task.
     */
    textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
    /**
     * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
     */
    videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
