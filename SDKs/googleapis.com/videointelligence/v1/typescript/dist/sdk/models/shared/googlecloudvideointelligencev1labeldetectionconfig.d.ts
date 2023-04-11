import { SpeakeasyBase } from "../../../internal/utils";
/**
 * What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.
 */
export declare enum GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum {
    LabelDetectionModeUnspecified = "LABEL_DETECTION_MODE_UNSPECIFIED",
    ShotMode = "SHOT_MODE",
    FrameMode = "FRAME_MODE",
    ShotAndFrameMode = "SHOT_AND_FRAME_MODE"
}
/**
 * Config for LABEL_DETECTION.
 */
export declare class GoogleCloudVideointelligenceV1LabelDetectionConfig extends SpeakeasyBase {
    /**
     * The confidence threshold we perform filtering on the labels from frame-level detection. If not set, it is set to 0.4 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.
     */
    frameConfidenceThreshold?: number;
    /**
     * What labels should be detected with LABEL_DETECTION, in addition to video-level labels or segment-level labels. If unspecified, defaults to `SHOT_MODE`.
     */
    labelDetectionMode?: GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum;
    /**
     * Model to use for label detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string;
    /**
     * Whether the video has been shot from a stationary (i.e., non-moving) camera. When set to true, might improve detection accuracy for moving objects. Should be used with `SHOT_AND_FRAME_MODE` enabled.
     */
    stationaryCamera?: boolean;
    /**
     * The confidence threshold we perform filtering on the labels from video-level and shot-level detections. If not set, it's set to 0.3 by default. The valid range for this threshold is [0.1, 0.9]. Any value set outside of this range will be clipped. Note: For best results, follow the default threshold. We will update the default threshold everytime when we release a new model.
     */
    videoConfidenceThreshold?: number;
}
