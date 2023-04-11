import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTheMinimumPaymentAmountRequest extends SpeakeasyBase {
    currencyFrom?: string;
    currencyTo?: string;
    xApiKey?: string;
}
/**
 * 200
 */
export declare class GetTheMinimumPaymentAmount200ApplicationJSON extends SpeakeasyBase {
    currencyFrom?: string;
    currencyTo?: string;
    fiatEquivalent?: number;
    minAmount?: number;
}
export declare class GetTheMinimumPaymentAmountResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getTheMinimumPaymentAmount200ApplicationJSONObject?: GetTheMinimumPaymentAmount200ApplicationJSON;
}
