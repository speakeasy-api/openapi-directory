import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetQuoteImageSearchSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class GetQuoteImageSearchRequest extends SpeakeasyBase {
    /**
     * Quote Author
     */
    author?: string;
    /**
     * Quote Category
     */
    category?: string;
    /**
     * Should search private collection. Default searches public image collection.
     */
    private?: boolean;
}
export declare class GetQuoteImageSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
