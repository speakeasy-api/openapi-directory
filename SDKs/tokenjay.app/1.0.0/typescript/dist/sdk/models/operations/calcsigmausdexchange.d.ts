import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CalcSigmaUsdExchangeRequest extends SpeakeasyBase {
    amount: number;
}
export declare class CalcSigmaUsdExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    calcSigmaUsdExchange400WildcardString?: string;
    /**
     * Unauthorized
     */
    calcSigmaUsdExchange401WildcardString?: string;
    /**
     * Not Found
     */
    calcSigmaUsdExchange404WildcardString?: string;
    /**
     * Conflict
     */
    calcSigmaUsdExchange409WildcardString?: string;
}
