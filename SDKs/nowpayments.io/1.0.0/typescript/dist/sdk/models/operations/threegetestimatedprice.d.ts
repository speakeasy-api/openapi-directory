import { SpeakeasyBase } from "../../../internal/utils";
export declare class ThreeGetEstimatedPriceQueryParams extends SpeakeasyBase {
    amount?: string;
    currencyFrom?: string;
    currencyTo?: string;
}
export declare class ThreeGetEstimatedPrice200ApplicationJson extends SpeakeasyBase {
    amountFrom?: number;
    currencyFrom?: string;
    currencyTo?: string;
    estimatedAmount?: number;
}
export declare class ThreeGetEstimatedPriceRequest extends SpeakeasyBase {
    queryParams: ThreeGetEstimatedPriceQueryParams;
}
export declare class ThreeGetEstimatedPriceResponse extends SpeakeasyBase {
    threeGetEstimatedPrice200ApplicationJSONObject?: ThreeGetEstimatedPrice200ApplicationJson;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
