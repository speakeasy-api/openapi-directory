import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraAnalyticsLiveRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraAnalyticsLiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraAnalyticsLive200ApplicationJSONObject?: Record<string, any>;
}
