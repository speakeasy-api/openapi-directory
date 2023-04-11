import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
 */
export declare class GoogleCloudDatalabelingV1beta1ObjectDetectionConfig extends SpeakeasyBase {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
    /**
     * Required. Number of frames per second to be extracted from the video.
     */
    extractionFrameRate?: number;
}
