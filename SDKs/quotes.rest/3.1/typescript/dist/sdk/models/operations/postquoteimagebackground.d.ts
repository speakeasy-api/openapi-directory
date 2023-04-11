import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteImageBackgroundSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteImageBackgroundRequestBodyImage extends SpeakeasyBase {
    content: Uint8Array;
    image: string;
}
export declare class PostQuoteImageBackgroundRequestBody extends SpeakeasyBase {
    /**
     * Image file to add to your collection (png/jpg/gif are supported)
     */
    image: PostQuoteImageBackgroundRequestBodyImage;
    /**
     * Optional comma separated tags
     */
    tags?: string;
}
export declare class PostQuoteImageBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
