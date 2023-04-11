import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteImageBackgroundTagsAddSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteImageBackgroundTagsAddRequest extends SpeakeasyBase {
    /**
     * Image ID
     */
    id: string;
    /**
     * Comma Separated tags
     */
    tags: string;
}
export declare class PostQuoteImageBackgroundTagsAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
