import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostQuoteDislikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PostQuoteDislikeRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    quoteId: string;
}
export declare class PostQuoteDislikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
