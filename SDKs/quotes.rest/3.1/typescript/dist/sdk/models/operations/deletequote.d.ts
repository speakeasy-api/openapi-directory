import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteQuoteSecurity extends SpeakeasyBase {
    xTheySaidSoApiSecret: string;
}
export declare class DeleteQuoteRequest extends SpeakeasyBase {
    /**
     * Quote ID
     */
    id: string;
}
export declare class DeleteQuoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
