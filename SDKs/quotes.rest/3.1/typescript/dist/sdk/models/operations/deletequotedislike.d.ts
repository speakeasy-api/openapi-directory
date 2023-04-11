import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQuoteDislikeSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class DeleteQuoteDislikeRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    quoteId: string;
}
export declare class DeleteQuoteDislikeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
