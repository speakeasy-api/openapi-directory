import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraQualityAndRetention200ApplicationJSONObject?: Record<string, any>;
}
