import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelRequest extends SpeakeasyBase {
    /**
     * Shopper ID to cancel subscriptions for when not using JWT
     */
    xShopperId?: string;
    /**
     * Unique identifier of the Subscription to cancel
     */
    subscriptionId: string;
}
export declare class CancelResponse extends SpeakeasyBase {
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
}
