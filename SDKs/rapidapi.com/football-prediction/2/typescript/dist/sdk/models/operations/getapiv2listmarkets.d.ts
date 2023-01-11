import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV2ListMarketsHeaders extends SpeakeasyBase {
    xRapidApiKey?: string;
}
export declare class GetApiV2ListMarkets200ApplicationJsonData extends SpeakeasyBase {
    all?: string[];
    allowedForYourSubscription?: string[];
}
export declare class GetApiV2ListMarkets200ApplicationJson extends SpeakeasyBase {
    data?: GetApiV2ListMarkets200ApplicationJsonData;
}
export declare class GetApiV2ListMarkets404ApplicationJson extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class GetApiV2ListMarketsRequest extends SpeakeasyBase {
    headers: GetApiV2ListMarketsHeaders;
}
export declare class GetApiV2ListMarketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiV2ListMarkets200ApplicationJSONObject?: GetApiV2ListMarkets200ApplicationJson;
    getApiV2ListMarkets404ApplicationJSONObject?: GetApiV2ListMarkets404ApplicationJson;
}
