import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
    /**
     * Maximum jitter in milliseconds
     */
    maxJitter?: number;
    /**
     * Maximum latency in milliseconds
     */
    maxLatency?: number;
    /**
     * Maximum percentage of packet loss
     */
    maxLossPercentage?: number;
    /**
     * Name of the custom performance class
     */
    name: string;
}
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    requestBody: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
    networkId: string;
}
export declare class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject?: Record<string, any>;
}
