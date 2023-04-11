import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The region of the page that is captured by this image, with dimensions measured in CSS pixels.
 */
export declare class PagespeedApiImageV2PageRect extends SpeakeasyBase {
    /**
     * The height of the rect.
     */
    height?: number;
    /**
     * The left coordinate of the rect, in page coordinates.
     */
    left?: number;
    /**
     * The top coordinate of the rect, in page coordinates.
     */
    top?: number;
    /**
     * The width of the rect.
     */
    width?: number;
}
export declare class PagespeedApiImageV2 extends SpeakeasyBase {
    /**
     * Image data base64 encoded.
     */
    data?: string;
    /**
     * Height of screenshot in pixels.
     */
    height?: number;
    /**
     * Unique string key, if any, identifying this image.
     */
    key?: string;
    /**
     * Mime type of image data (e.g. "image/jpeg").
     */
    mimeType?: string;
    /**
     * The region of the page that is captured by this image, with dimensions measured in CSS pixels.
     */
    pageRect?: PagespeedApiImageV2PageRect;
    /**
     * Width of screenshot in pixels.
     */
    width?: number;
}
