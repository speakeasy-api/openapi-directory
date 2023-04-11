import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkDevicePerformanceRequest extends SpeakeasyBase {
    networkId: string;
    serial: string;
}
export declare class GetNetworkDevicePerformanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkDevicePerformance200ApplicationJSONObject?: Record<string, any>;
}
