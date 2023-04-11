import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEventMatchTimeseriesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEventMatchTimeseriesRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Event Key, eg `2016nytr`
     */
    eventKey: string;
}
export declare class GetEventMatchTimeseriesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getEventMatchTimeseries200ApplicationJSONStrings?: string[];
}
