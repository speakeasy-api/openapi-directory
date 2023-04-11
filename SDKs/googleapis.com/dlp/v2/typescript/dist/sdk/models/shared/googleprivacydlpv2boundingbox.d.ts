import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bounding box encompassing detected text within an image.
 */
export declare class GooglePrivacyDlpV2BoundingBox extends SpeakeasyBase {
    /**
     * Height of the bounding box in pixels.
     */
    height?: number;
    /**
     * Left coordinate of the bounding box. (0,0) is upper left.
     */
    left?: number;
    /**
     * Top coordinate of the bounding box. (0,0) is upper left.
     */
    top?: number;
    /**
     * Width of the bounding box in pixels.
     */
    width?: number;
}
