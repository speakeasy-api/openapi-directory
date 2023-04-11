import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for video event human labeling task.
 */
export declare class GoogleCloudDatalabelingV1beta1EventConfig extends SpeakeasyBase {
    /**
     * Required. The list of annotation spec set resource name. Similar to video classification, we support selecting event from multiple AnnotationSpecSet at the same time.
     */
    annotationSpecSets?: string[];
    /**
     * Videos will be cut to smaller clips to make it easier for labelers to work on. Users can configure is field in seconds, if not set, default value is 60s.
     */
    clipLength?: number;
    /**
     * The overlap length between different video clips. Users can configure is field in seconds, if not set, default value is 1s.
     */
    overlapLength?: number;
}
