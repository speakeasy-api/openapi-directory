import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRawRequest extends SpeakeasyBase {
    /**
     * The Shopper details to update
     */
    requestBody: Uint8Array;
    /**
     * The ID of the Shopper to update
     */
    shopperId: string;
}
export declare class UpdateRawResponse extends SpeakeasyBase {
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
    shopperId?: shared.ShopperId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
