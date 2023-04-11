import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQuoteImageFontSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class DeleteQuoteImageFontRequest extends SpeakeasyBase {
    /**
     * Font ID
     */
    id: string;
}
export declare class DeleteQuoteImageFontResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
