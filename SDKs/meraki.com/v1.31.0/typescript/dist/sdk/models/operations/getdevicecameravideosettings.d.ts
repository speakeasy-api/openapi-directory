import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraVideoSettings200ApplicationJSONObject?: Record<string, any>;
}
