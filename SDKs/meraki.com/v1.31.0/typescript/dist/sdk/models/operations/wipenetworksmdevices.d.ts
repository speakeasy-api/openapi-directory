import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WipeNetworkSmDevicesRequestBody extends SpeakeasyBase {
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
export declare class WipeNetworkSmDevicesRequest extends SpeakeasyBase {
    requestBody?: WipeNetworkSmDevicesRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class WipeNetworkSmDevices200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki Id of the devices.
     */
    id?: string;
}
export declare class WipeNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    wipeNetworkSmDevices200ApplicationJSONObject?: WipeNetworkSmDevices200ApplicationJSON;
}
