import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WipeNetworkSmDeviceRequestBody extends SpeakeasyBase {
    /**
     * The id of the device to be wiped.
     */
    id?: string;
    /**
     * The pin number (a six digit value) for wiping a macOS device. Required only for macOS devices.
     */
    pin?: number;
    /**
     * The serial of the device to be wiped.
     */
    serial?: string;
    /**
     * The wifiMac of the device to be wiped.
     */
    wifiMac?: string;
}
export declare class WipeNetworkSmDeviceRequest extends SpeakeasyBase {
    requestBody?: WipeNetworkSmDeviceRequestBody;
    networkId: string;
}
export declare class WipeNetworkSmDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    wipeNetworkSmDevice200ApplicationJSONObject?: Record<string, any>;
}
