import { SpeakeasyBase } from "../../../internal/utils";
import { MediaProperties } from "./mediaproperties";
/**
 * Data representing an image.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * A description of the image that is shown on hover and read by screenreaders.
     */
    altText?: string;
    /**
     * Output only. A URI from which you can download the image; this is valid only for a limited time.
     */
    contentUri?: string;
    /**
     * Properties of the media.
     */
    properties?: MediaProperties;
    /**
     * Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.
     */
    sourceUri?: string;
}
/**
 * Data representing an image.
 */
export declare class ImageInput extends SpeakeasyBase {
    /**
     * A description of the image that is shown on hover and read by screenreaders.
     */
    altText?: string;
    /**
     * Properties of the media.
     */
    properties?: MediaProperties;
    /**
     * Input only. The source URI is the URI used to insert the image. The source URI can be empty when fetched.
     */
    sourceUri?: string;
}
