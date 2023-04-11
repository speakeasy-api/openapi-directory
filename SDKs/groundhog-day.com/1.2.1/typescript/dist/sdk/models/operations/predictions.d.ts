import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PredictionsRequest extends SpeakeasyBase {
    /**
     * A calendar year
     */
    year?: number;
}
export declare class Predictions400ApplicationJSONError extends SpeakeasyBase {
    message: string;
    status: number;
    timestamp: string;
}
/**
 * Bad Request
 */
export declare class Predictions400ApplicationJSON extends SpeakeasyBase {
    error?: Predictions400ApplicationJSONError;
}
/**
 * OK
 */
export declare class Predictions200ApplicationJSON extends SpeakeasyBase {
    predictions?: shared.Prediction[];
}
export declare class PredictionsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    predictions200ApplicationJSONObject?: Predictions200ApplicationJSON;
    /**
     * Bad Request
     */
    predictions400ApplicationJSONObject?: Predictions400ApplicationJSON;
}
