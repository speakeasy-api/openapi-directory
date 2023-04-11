import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for video object tracking human labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1ObjectTrackingConfig extends SpeakeasyBase {
    /**
     * Required. Annotation spec set resource name.
     */
    annotationSpecSet?: string;
    /**
     * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 20s.
     */
    clipLength?: number;
    /**
     * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 0.3s.
     */
    overlapLength?: number;
}
