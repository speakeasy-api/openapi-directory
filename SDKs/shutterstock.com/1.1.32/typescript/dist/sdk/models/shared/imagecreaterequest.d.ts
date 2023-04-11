import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to upload an image
 */
export declare class ImageCreateRequest extends SpeakeasyBase {
    /**
     * A Base 64 encoded jpeg or png; images can be no larger than 10mb and can be no larger than 10,000 pixels in width or height
     */
    base64Image: string;
}
