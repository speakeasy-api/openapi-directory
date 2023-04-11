import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CalcSigmaRsvExchangeRequest extends SpeakeasyBase {
    amount: number;
}
export declare class CalcSigmaRsvExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    calcSigmaRsvExchange400WildcardString?: string;
    /**
     * Unauthorized
     */
    calcSigmaRsvExchange401WildcardString?: string;
    /**
     * Not Found
     */
    calcSigmaRsvExchange404WildcardString?: string;
    /**
     * Conflict
     */
    calcSigmaRsvExchange409WildcardString?: string;
}
