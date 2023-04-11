import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetIncludesEnum {
    CustomerId = "customerId"
}
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Additional properties to be included in the response shopper object
     */
    includes?: GetIncludesEnum[];
    /**
     * Shopper whose details are to be retrieved
     */
    shopperId: string;
}
export declare class GetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    /**
     * Too many requests received within interval
     */
    errorLimit?: shared.ErrorLimit;
    /**
     * Request was successful
     */
    shopper?: shared.Shopper;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
