import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraQualityAndRetentionSettingsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraQualityAndRetentionSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraQualityAndRetentionSettings200ApplicationJSONObject?: Record<string, any>;
}
