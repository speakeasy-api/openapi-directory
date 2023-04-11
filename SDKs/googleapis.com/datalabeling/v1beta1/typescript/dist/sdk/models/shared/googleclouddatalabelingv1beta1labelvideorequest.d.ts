import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";
/**
 * Required. The type of video labeling task.
 */
export declare enum GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    Classification = "CLASSIFICATION",
    ObjectDetection = "OBJECT_DETECTION",
    ObjectTracking = "OBJECT_TRACKING",
    Event = "EVENT"
}
/**
 * Request message for LabelVideo.
 */
export declare class GoogleCloudDatalabelingV1beta1LabelVideoRequest extends SpeakeasyBase {
    /**
     * Configuration for how human labeling task should be done.
     */
    basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Config for video event human labeling task.
     */
    eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;
    /**
     * Required. The type of video labeling task.
     */
    feature?: GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum;
    /**
     * Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
     */
    objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;
    /**
     * Config for video object tracking human labeling task.
     */
    objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;
    /**
     * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
     */
    videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
