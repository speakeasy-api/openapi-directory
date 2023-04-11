import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2ListFederationsRequest extends SpeakeasyBase {
    /**
     * Your key obtained from https://boggio-analytics.com/fp-api/
     */
    xRapidApiKey?: string;
}
/**
 * Bad request, check response for detailed errors.
 */
export declare class GetApiV2ListFederations404ApplicationJSON extends SpeakeasyBase {
    errors?: Record<string, any>;
}
/**
 * Static response, shows available federations.
 */
export declare class GetApiV2ListFederations200ApplicationJSON extends SpeakeasyBase {
    data?: string[];
}
export declare class GetApiV2ListFederationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Static response, shows available federations.
     */
    getApiV2ListFederations200ApplicationJSONObject?: GetApiV2ListFederations200ApplicationJSON;
    /**
     * Bad request, check response for detailed errors.
     */
    getApiV2ListFederations404ApplicationJSONObject?: GetApiV2ListFederations404ApplicationJSON;
}
