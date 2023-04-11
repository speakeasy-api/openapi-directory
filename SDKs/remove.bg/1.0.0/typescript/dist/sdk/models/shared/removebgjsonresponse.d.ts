import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveBgJsonResponseData extends SpeakeasyBase {
    /**
     * Height of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.
     */
    foregroundHeight?: number;
    /**
     * Left position of the foreground image along the horizontal axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.
     */
    foregroundLeft?: number;
    /**
     * Top position of the foreground image along the vertical axis. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.
     */
    foregroundTop?: number;
    /**
     * Width of the foreground image. In case the input image resolution is higher than the limit (> 25 megapixels) this value is expressed with respect to the input image resolution.
     */
    foregroundWidth?: number;
    /**
     * Base64 encoded string of result image
     */
    resultB64?: string;
}
/**
 * Image background removed
 */
export declare class RemoveBgJsonResponse extends SpeakeasyBase {
    data?: RemoveBgJsonResponseData;
}
