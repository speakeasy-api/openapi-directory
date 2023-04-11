import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEventPredictionsSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventPredictionsRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventPredictionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    eventPredictions?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
