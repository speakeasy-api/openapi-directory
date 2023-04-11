import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeviceCameraVideoSettingsRequestBody extends SpeakeasyBase {
    /**
     * Boolean indicating if external rtsp stream is exposed
     */
    externalRtspEnabled?: boolean;
}
export declare class UpdateDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceCameraVideoSettingsRequestBody;
    serial: string;
}
export declare class UpdateDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceCameraVideoSettings200ApplicationJSONObject?: Record<string, any>;
}
