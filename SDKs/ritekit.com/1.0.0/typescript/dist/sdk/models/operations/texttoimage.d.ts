import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TextToImageRequest extends SpeakeasyBase {
    /**
     * Animation type: none, rays, glint, circle
     */
    animation: string;
    /**
     * Name of the author/source
     */
    author: string;
    /**
     * Font-family used for author name
     */
    authorFont: string;
    /**
     * Font color of the author
     */
    authorFontColor: string;
    /**
     * Background color for solid background type
     */
    backgroundColor: string;
    /**
     * Background type (gradient/solid)
     */
    bgType: string;
    /**
     * URL of the brand logo
     */
    brandLogo: string;
    /**
     * Enable highlight on quote text
     */
    enableHighlight: number;
    /**
     * Font size for the quote (author font size is calculated automatically)
     */
    fontSize: number;
    /**
     * First color for gradient background type
     */
    gradientColor1: string;
    /**
     * Second color for gradient background type
     */
    gradientColor2: string;
    /**
     * Type of gradient background (linear/radial)
     */
    gradientType: string;
    /**
     * Color used for highlight
     */
    highlightColor: string;
    /**
     * Text of the quote
     */
    quote: string;
    /**
     * Font-family used for quote text
     */
    quoteFont: string;
    /**
     * Font color of the quote text
     */
    quoteFontColor: string;
    /**
     * showing/hiding quote mark
     */
    showQuoteMark?: number;
}
export declare class TextToImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
