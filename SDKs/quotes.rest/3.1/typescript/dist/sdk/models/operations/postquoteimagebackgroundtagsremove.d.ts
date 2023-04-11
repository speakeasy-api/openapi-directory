import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteImageBackgroundTagsRemoveSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteImageBackgroundTagsRemoveRequest extends SpeakeasyBase {
    /**
     * Image ID
     */
    id: string;
    /**
     * Comma Separated tags
     */
    tags: string;
}
export declare class PostQuoteImageBackgroundTagsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
