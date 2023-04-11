import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2PredictionsRequest extends SpeakeasyBase {
    /**
     * Your key obtained from https://boggio-analytics.com/fp-api/
     */
    xRapidApiKey?: string;
}
/**
 * Bad request, check response for detailed errors.
 */
export declare class GetApiV2Predictions404ApplicationJSON extends SpeakeasyBase {
    errors?: Record<string, any>;
}
export declare class GetApiV2PredictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request, check response for detailed errors.
     */
    getApiV2Predictions404ApplicationJSONObject?: GetApiV2Predictions404ApplicationJSON;
}
