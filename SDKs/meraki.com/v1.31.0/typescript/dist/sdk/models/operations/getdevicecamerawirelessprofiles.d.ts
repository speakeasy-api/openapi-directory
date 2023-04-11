import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceCameraWirelessProfilesRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCameraWirelessProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceCameraWirelessProfiles200ApplicationJSONObject?: Record<string, any>;
}
