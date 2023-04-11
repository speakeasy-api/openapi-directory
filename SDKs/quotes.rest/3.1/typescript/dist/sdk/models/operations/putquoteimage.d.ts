import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutQuoteImageSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PutQuoteImageRequest extends SpeakeasyBase {
    /**
     * Background Color(if background image id is not supplied)
     */
    bgColor?: string;
    /**
     * Background Image id ( Will override bgcolor if supplied)
     */
    bgimageId?: string;
    /**
     * Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels)
     */
    branding?: boolean;
    /**
     * Font id
     */
    fontId?: string;
    /**
     * Horizontal text Alignment Value
     */
    halign?: string;
    /**
     * Image Height(By default this takes the height of the background image)
     */
    height?: number;
    /**
     * Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text.
     */
    includeTransparentLayer?: boolean;
    /**
     * Quote id
     */
    quoteId: string;
    /**
     * Text Color
     */
    textColor?: string;
    /**
     * Text/font size
     */
    textSize?: string;
    /**
     * Vertical text Alignment Value
     */
    valign?: string;
    /**
     * Image Width(By default this takes the width of the background image)
     */
    width?: number;
}
export declare class PutQuoteImageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
