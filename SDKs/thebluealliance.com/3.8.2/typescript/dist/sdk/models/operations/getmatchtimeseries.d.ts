import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMatchTimeseriesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetMatchTimeseriesRequest extends SpeakeasyBase {
    /**
     * Value of the `ETag` header in the most recently cached response by the client.
     */
    ifNoneMatch?: string;
    /**
     * TBA Match Key, eg `2016nytr_qm1`
     */
    matchKey: string;
}
export declare class GetMatchTimeseriesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    getMatchTimeseries200ApplicationJSONObjects?: Record<string, any>[];
}
