import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2ListMarketsRequest extends SpeakeasyBase {
    /**
     * Your key obtained from https://boggio-analytics.com/fp-api/
     */
    xRapidApiKey?: string;
}
/**
 * Bad request, check response for detailed errors.
 */
export declare class GetApiV2ListMarkets404ApplicationJSON extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class GetApiV2ListMarkets200ApplicationJSONData extends SpeakeasyBase {
    all?: string[];
    allowedForYourSubscription?: string[];
}
/**
 * Static response, shows available markets for the current subscription and all available markets in general.
 */
export declare class GetApiV2ListMarkets200ApplicationJSON extends SpeakeasyBase {
    data?: GetApiV2ListMarkets200ApplicationJSONData;
}
export declare class GetApiV2ListMarketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Static response, shows available markets for the current subscription and all available markets in general.
     */
    getApiV2ListMarkets200ApplicationJSONObject?: GetApiV2ListMarkets200ApplicationJSON;
    /**
     * Bad request, check response for detailed errors.
     */
    getApiV2ListMarkets404ApplicationJSONObject?: GetApiV2ListMarkets404ApplicationJSON;
}
