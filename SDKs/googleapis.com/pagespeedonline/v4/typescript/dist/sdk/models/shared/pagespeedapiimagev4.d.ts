import { SpeakeasyBase } from "../../../internal/utils";
export declare class PagespeedApiImageV4PageRect extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiImageV4 extends SpeakeasyBase {
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
    pageRect?: PagespeedApiImageV4PageRect;
    /**
     * Width of screenshot in pixels.
     */
    width?: number;
}
