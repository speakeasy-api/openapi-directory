import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteImageFontSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteImageFontRequestBodyFont extends SpeakeasyBase {
    content: Uint8Array;
    font: string;
}
export declare class PostQuoteImageFontRequestBody extends SpeakeasyBase {
    /**
     * Font file to add to your collection (ttf/otf are supported)
     */
    font: PostQuoteImageFontRequestBodyFont;
    /**
     * Optional comma separated tags
     */
    tags?: string;
}
export declare class PostQuoteImageFontResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
