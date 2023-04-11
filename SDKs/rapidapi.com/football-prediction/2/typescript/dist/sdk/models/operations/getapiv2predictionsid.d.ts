import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2PredictionsIdRequest extends SpeakeasyBase {
    /**
     * ID of match
     */
    id: number;
}
/**
 * Bad request, check response for detailed errors.
 */
export declare class GetApiV2PredictionsId404ApplicationJSON extends SpeakeasyBase {
    errors?: Record<string, any>;
}
/**
 * Good request, returns object that contains all the predictions for a certain event.
 */
export declare class GetApiV2PredictionsId200ApplicationJSON extends SpeakeasyBase {
    data?: Record<string, any>[];
}
export declare class GetApiV2PredictionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Good request, returns object that contains all the predictions for a certain event.
     */
    getApiV2PredictionsId200ApplicationJSONObject?: GetApiV2PredictionsId200ApplicationJSON;
    /**
     * Bad request, check response for detailed errors.
     */
    getApiV2PredictionsId404ApplicationJSONObject?: GetApiV2PredictionsId404ApplicationJSON;
}
