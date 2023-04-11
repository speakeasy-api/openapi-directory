import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedObject } from "./detectedobject";
import { ImageMetadata } from "./imagemetadata";
/**
 * Result of a DetectImage call.
 */
export declare class DetectResult extends SpeakeasyBase {
    /**
     * Image metadata.
     */
    metadata?: ImageMetadata;
    /**
     * An array of detected objects.
     */
    objects?: DetectedObject[];
    /**
     * Id of the REST API request.
     */
    requestId?: string;
}
