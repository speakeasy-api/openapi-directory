import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset.
 */
export declare class Crop extends SpeakeasyBase {
    /**
     * Crop from the bottom of the asset
     */
    bottom?: number;
    /**
     * Crop from the left of the asset
     */
    left?: number;
    /**
     * Crop from the left of the asset
     */
    right?: number;
    /**
     * Crop from the top of the asset
     */
    top?: number;
}
