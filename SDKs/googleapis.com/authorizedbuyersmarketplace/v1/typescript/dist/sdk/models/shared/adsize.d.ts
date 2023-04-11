import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the ad slot size.
 */
export declare enum AdSizeTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
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
     * The type of the ad slot size.
     */
    type?: AdSizeTypeEnum;
    /**
     * The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.
     */
    width?: string;
}
