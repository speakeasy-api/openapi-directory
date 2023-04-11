import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DoSigmaRsvExchangeRequest extends SpeakeasyBase {
    address: string;
    amount: number;
    checkRate?: number;
    executionFee?: number;
}
export declare class DoSigmaRsvExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    doSigmaRsvExchange400WildcardString?: string;
    /**
     * Unauthorized
     */
    doSigmaRsvExchange401WildcardString?: string;
    /**
     * Not Found
     */
    doSigmaRsvExchange404WildcardString?: string;
    /**
     * Conflict
     */
    doSigmaRsvExchange409WildcardString?: string;
}
