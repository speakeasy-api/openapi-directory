import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.
 */
export declare class Size extends SpeakeasyBase {
    /**
     * Set a custom height for the video or image file. Value must be divisible by 2. Maximum video height is 1920px, maximum image height is 4096px.
     */
    height?: number;
    /**
     * Set a custom width for the video or image file. Value must be divisible by 2. Maximum video width is 1920px, maximum image width is 4096px.
     */
    width?: number;
}
