import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for FACE_DETECTION.
 */
export declare class GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig extends SpeakeasyBase {
    /**
     * Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if 'include_bounding_boxes' is set to false.
     */
    includeAttributes?: boolean;
    /**
     * Whether bounding boxes are included in the face annotation output.
     */
    includeBoundingBoxes?: boolean;
    /**
     * Model to use for face detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
     */
    model?: string;
}
