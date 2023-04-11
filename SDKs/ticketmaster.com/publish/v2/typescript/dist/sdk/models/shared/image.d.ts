import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Aspect ratio of the image
 */
export declare enum ImageRatioEnum {
    Sixteen9 = "16_9",
    Three2 = "3_2",
    Four3 = "4_3"
}
/**
 * Image
 */
export declare class Image extends SpeakeasyBase {
    /**
     * Attribution of the image
     */
    attribution?: string;
    /**
     * Domains on which this image should be displayed
     */
    domains?: string[];
    /**
     * true if the image is not the event's image but a fallbak image
     */
    fallback?: boolean;
    /**
     * Height of the image
     */
    height?: number;
    /**
     * Aspect ratio of the image
     */
    ratio?: ImageRatioEnum;
    /**
     * Public URL of the image
     */
    url?: string;
    /**
     * Width of the image
     */
    width?: number;
}
