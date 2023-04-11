import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LockNetworkSmDevicesRequestBody extends SpeakeasyBase {
    /**
     * The ids of the devices to be locked.
     */
    ids?: string[];
    /**
     * The pin number for locking macOS devices (a six digit number). Required only for macOS devices.
     */
    pin?: number;
    /**
     * The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be wiped.
     */
    scope?: string[];
    /**
     * The serials of the devices to be locked.
     */
    serials?: string[];
    /**
     * The wifiMacs of the devices to be locked.
     */
    wifiMacs?: string[];
}
export declare class LockNetworkSmDevicesRequest extends SpeakeasyBase {
    requestBody?: LockNetworkSmDevicesRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class LockNetworkSmDevices200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki Ids of the set of devices.
     */
    ids?: string[];
}
export declare class LockNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    lockNetworkSmDevices200ApplicationJSONObject?: LockNetworkSmDevices200ApplicationJSON;
}
