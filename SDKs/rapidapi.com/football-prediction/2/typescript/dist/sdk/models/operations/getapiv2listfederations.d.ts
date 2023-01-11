import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV2ListFederationsHeaders extends SpeakeasyBase {
    xRapidApiKey?: string;
}
export declare class GetApiV2ListFederations200ApplicationJson extends SpeakeasyBase {
    data?: string[];
}
export declare class GetApiV2ListFederations404ApplicationJson extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class GetApiV2ListFederationsRequest extends SpeakeasyBase {
    headers: GetApiV2ListFederationsHeaders;
}
export declare class GetApiV2ListFederationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getApiV2ListFederations200ApplicationJSONObject?: GetApiV2ListFederations200ApplicationJson;
    getApiV2ListFederations404ApplicationJSONObject?: GetApiV2ListFederations404ApplicationJson;
}
