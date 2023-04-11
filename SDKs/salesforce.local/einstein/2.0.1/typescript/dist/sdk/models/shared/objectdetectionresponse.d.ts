import { SpeakeasyBase } from "../../../internal/utils";
import { DetectionResult } from "./detectionresult";
/**
 * Detection Result
 */
export declare class ObjectDetectionResponse extends SpeakeasyBase {
    object?: string;
    probabilities?: DetectionResult[];
    /**
     * Value passed in when the prediction call was made. Returned only if the sampleId request parameter is provided.
     */
    sampleId?: string;
}
