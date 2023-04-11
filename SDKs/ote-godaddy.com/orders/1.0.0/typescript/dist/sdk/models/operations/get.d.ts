import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Market in which the request is happening
     */
    xMarketId?: string;
    /**
     * Shopper ID to be operated on, if different from JWT<br/><b>Reseller subaccounts are not supported</b>
     */
    xShopperId?: string;
    /**
     * Order id whose details are to be retrieved
     */
    orderId: string;
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
    order?: shared.Order;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
