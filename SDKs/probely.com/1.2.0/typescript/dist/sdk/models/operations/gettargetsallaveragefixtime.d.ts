import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllAverageFixTime200ApplicationJSONResults extends SpeakeasyBase {
    /**
     * Average fix time in seconds for high severity findings
     */
    high?: number;
    /**
     * Average fix time in seconds for low severity findings
     */
    low?: number;
    /**
     * Average fix time in seconds for medium severity findings
     */
    medium?: number;
}
/**
 * Average fix time plot data
 */
export declare class GetTargetsAllAverageFixTime200ApplicationJSON extends SpeakeasyBase {
    results?: GetTargetsAllAverageFixTime200ApplicationJSONResults;
}
export declare class GetTargetsAllAverageFixTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Average fix time plot data
     */
    getTargetsAllAverageFixTime200ApplicationJSONObject?: GetTargetsAllAverageFixTime200ApplicationJSON;
}
