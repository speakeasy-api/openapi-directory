import { SpeakeasyBase } from "../../../internal/utils";
import { FaceRectangle } from "./facerectangle";
/**
 * Possible gender of the face.
 */
export declare enum FaceDescriptionGenderEnum {
    Male = "Male",
    Female = "Female"
}
/**
 * An object describing a face identified in the image.
 */
export declare class FaceDescription extends SpeakeasyBase {
    /**
     * Possible age of the face.
     */
    age?: number;
    /**
     * An object describing face rectangle.
     */
    faceRectangle?: FaceRectangle;
    /**
     * Possible gender of the face.
     */
    gender?: FaceDescriptionGenderEnum;
}
