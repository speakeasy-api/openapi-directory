import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutQuoteDislikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class PutQuoteDislikeRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    quoteId: string;
}
export declare class PutQuoteDislikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
