import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObjects?: Record<string, any>[];
}
