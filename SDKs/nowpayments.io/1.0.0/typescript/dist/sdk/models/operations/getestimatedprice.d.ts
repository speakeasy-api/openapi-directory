import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEstimatedPriceRequest extends SpeakeasyBase {
    amount?: string;
    currencyFrom?: string;
    currencyTo?: string;
    xApiKey?: string;
}
/**
 * 200
 */
export declare class GetEstimatedPrice200ApplicationJSON extends SpeakeasyBase {
    amountFrom?: number;
    currencyFrom?: string;
    currencyTo?: string;
    estimatedAmount?: number;
}
export declare class GetEstimatedPriceResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * 200
     */
    getEstimatedPrice200ApplicationJSONObject?: GetEstimatedPrice200ApplicationJSON;
}
