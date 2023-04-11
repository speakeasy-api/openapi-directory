import { SpeakeasyBase } from "../../../internal/utils";
export declare class Image extends SpeakeasyBase {
    /**
     * Alternative text for the image (to be used e.g. to cater to screenreaders).
     */
    altText?: string;
    /**
     * Height in pixels.
     */
    height: number;
    /**
     * The url of this image. The url of an image might change over time, and we therefore advise not to store or cache image URLs within your app beyond a few minutes.
     */
    url: string;
    /**
     * Width in pixels.
     */
    width: number;
}
