import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody extends SpeakeasyBase {
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
    name?: string;
}
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody;
    customPerformanceClassId: string;
    networkId: string;
}
export declare class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject?: Record<string, any>;
}
