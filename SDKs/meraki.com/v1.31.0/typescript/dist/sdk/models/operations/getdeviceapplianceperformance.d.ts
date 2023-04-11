import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceAppliancePerformanceRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceAppliancePerformanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceAppliancePerformance200ApplicationJSONObject?: Record<string, any>;
}
