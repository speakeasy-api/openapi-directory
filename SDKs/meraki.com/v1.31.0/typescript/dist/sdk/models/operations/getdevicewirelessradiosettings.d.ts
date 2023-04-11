import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceWirelessRadioSettings200ApplicationJSONObject?: Record<string, any>;
}
