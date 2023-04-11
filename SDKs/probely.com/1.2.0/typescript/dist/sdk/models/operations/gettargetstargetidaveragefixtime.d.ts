import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdAverageFixTimeRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
export declare class GetTargetsTargetIdAverageFixTime200ApplicationJSONResults extends SpeakeasyBase {
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
export declare class GetTargetsTargetIdAverageFixTime200ApplicationJSON extends SpeakeasyBase {
    results?: GetTargetsTargetIdAverageFixTime200ApplicationJSONResults;
}
export declare class GetTargetsTargetIdAverageFixTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Average fix time plot data
     */
    getTargetsTargetIdAverageFixTime200ApplicationJSONObject?: GetTargetsTargetIdAverageFixTime200ApplicationJSON;
}
