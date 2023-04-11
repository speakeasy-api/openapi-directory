import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Market in which the request is happening
     */
    xMarketId?: string;
    /**
     * Shopper ID to be operated on, if different from JWT
     */
    xShopperId?: string;
    /**
     * Unique identifier of the Subscription to retrieve
     */
    subscriptionId: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Request was successful
     */
    subscription?: shared.Subscription;
}
