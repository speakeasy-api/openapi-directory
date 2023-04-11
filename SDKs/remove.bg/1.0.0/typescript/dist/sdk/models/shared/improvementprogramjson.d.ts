import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImprovementProgramJson extends SpeakeasyBase {
    /**
     * Source image file (base64-encoded string). (If this parameter is present, the other image source parameters must be empty.)
     */
    imageFileB64?: string;
    /**
     * Filename of the image, if not provided it will be autodetected form the submitted data.
     */
    imageFilename?: string;
    /**
     * Source image URL. (If this parameter is present, the other image source parameters must be empty.)
     */
    imageUrl?: string;
    /**
     * Images with the same tag are grouped together.
     */
    tag?: string;
}
