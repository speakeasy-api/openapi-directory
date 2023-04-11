import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteImageFontTagsRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteImageFontTagsRemoveRequest extends SpeakeasyBase {
    /**
     * Font ID
     */
    id: string;
    /**
     * Comma Separated tags
     */
    tags: string;
}
export declare class PostQuoteImageFontTagsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
