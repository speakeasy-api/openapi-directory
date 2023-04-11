import { SpeakeasyBase } from "../../../internal/utils";
import { FaceRectangle } from "./facerectangle";
/**
 * An object describing possible celebrity identification.
 */
export declare class CelebritiesModel extends SpeakeasyBase {
    /**
     * Confidence level for the celebrity recognition as a value ranging from 0 to 1.
     */
    confidence?: number;
    /**
     * An object describing face rectangle.
     */
    faceRectangle?: FaceRectangle;
    /**
     * Name of the celebrity.
     */
    name?: string;
}
