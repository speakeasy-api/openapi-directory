import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for PERSON_DETECTION.
 */
export declare class GoogleCloudVideointelligenceV1beta2PersonDetectionConfig extends SpeakeasyBase {
    /**
     * Whether to enable person attributes detection, such as cloth color (black, blue, etc), type (coat, dress, etc), pattern (plain, floral, etc), hair, etc. Ignored if 'include_bounding_boxes' is set to false.
     */
    includeAttributes?: boolean;
    /**
     * Whether bounding boxes are included in the person detection annotation output.
     */
    includeBoundingBoxes?: boolean;
    /**
     * Whether to enable pose landmarks detection. Ignored if 'include_bounding_boxes' is set to false.
     */
    includePoseLandmarks?: boolean;
}
