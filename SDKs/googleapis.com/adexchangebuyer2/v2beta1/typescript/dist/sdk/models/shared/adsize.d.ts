import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The size type of the ad slot.
 */
export declare enum AdSizeSizeTypeEnum {
    SizeTypeUnspecified = "SIZE_TYPE_UNSPECIFIED",
    Pixel = "PIXEL",
    Interstitial = "INTERSTITIAL",
    Native = "NATIVE",
    Fluid = "FLUID"
}
/**
 * Represents size of a single ad slot, or a creative.
 */
export declare class AdSize extends SpeakeasyBase {
    /**
     * The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    height?: string;
    /**
     * The size type of the ad slot.
     */
    sizeType?: AdSizeSizeTypeEnum;
    /**
     * The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    width?: string;
}
