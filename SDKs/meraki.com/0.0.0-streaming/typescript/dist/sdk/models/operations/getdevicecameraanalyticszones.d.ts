import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraAnalyticsZonesRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraAnalyticsZonesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraAnalyticsZones200ApplicationJSONObjects?: Record<string, any>[];
}
