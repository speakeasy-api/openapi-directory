import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A landmark recognized in the image.
 */
export declare class LandmarksModel extends SpeakeasyBase {
    /**
     * Confidence level for the landmark recognition as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * Name of the landmark.
     */
    name?: string;
}
