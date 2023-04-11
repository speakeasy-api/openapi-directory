import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest extends SpeakeasyBase {
    customPerformanceClassId: string;
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject?: Record<string, any>;
}
