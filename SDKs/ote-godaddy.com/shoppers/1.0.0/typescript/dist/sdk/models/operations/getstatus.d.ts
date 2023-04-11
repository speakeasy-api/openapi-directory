import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatusRequest extends SpeakeasyBase {
    /**
     * The client IP of the user who originated the request leading to this call.
     */
    auditClientIp: string;
    /**
     * The ID of the shopper to retrieve. Must agree with the shopper id on the token or header, if present
     */
    shopperId: string;
}
export declare class GetStatusResponse extends SpeakeasyBase {
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
    shopperStatus?: shared.ShopperStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
