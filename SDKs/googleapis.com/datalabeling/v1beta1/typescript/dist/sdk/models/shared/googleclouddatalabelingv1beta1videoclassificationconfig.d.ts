import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig } from "./googleclouddatalabelingv1beta1annotationspecsetconfig";
/**
 * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
 */
export declare class GoogleCloudDatalabelingV1beta1VideoClassificationConfig extends SpeakeasyBase {
    /**
     * Required. The list of annotation spec set configs. Since watching a video clip takes much longer time than an image, we support label with multiple AnnotationSpecSet at the same time. Labels in each AnnotationSpecSet will be shown in a group to contributors. Contributors can select one or more (depending on whether to allow multi label) from each group.
     */
    annotationSpecSetConfigs?: GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[];
    /**
     * Optional. Option to apply shot detection on the video.
     */
    applyShotDetection?: boolean;
}
