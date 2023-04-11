import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DoSigmaUsdExchangeRequest extends SpeakeasyBase {
    address: string;
    amount: number;
    checkRate?: number;
    executionFee?: number;
}
export declare class DoSigmaUsdExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    doSigmaUsdExchange400WildcardString?: string;
    /**
     * Unauthorized
     */
    doSigmaUsdExchange401WildcardString?: string;
    /**
     * Not Found
     */
    doSigmaUsdExchange404WildcardString?: string;
    /**
     * Conflict
     */
    doSigmaUsdExchange409WildcardString?: string;
}
