import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCameraVideoSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraVideoSettingsRequest extends SpeakeasyBase {
    pathParams: GetDeviceCameraVideoSettingsPathParams;
}
export declare class GetDeviceCameraVideoSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCameraVideoSettings200ApplicationJSONObject?: Record<string, any>;
}
