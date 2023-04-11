import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraCustomAnalyticsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraCustomAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraCustomAnalytics200ApplicationJSONObject?: Record<string, any>;
}
