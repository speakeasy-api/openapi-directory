import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MoveNetworkSmDevicesRequestBody extends SpeakeasyBase {
    /**
     * The ids of the devices to be moved.
     */
    ids?: string[];
    /**
     * The new network to which the devices will be moved.
     */
    newNetwork: string;
    /**
     * The scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags of the devices to be moved.
     */
    scope?: string[];
    /**
     * The serials of the devices to be moved.
     */
    serials?: string[];
    /**
     * The wifiMacs of the devices to be moved.
     */
    wifiMacs?: string[];
}
export declare class MoveNetworkSmDevicesRequest extends SpeakeasyBase {
    requestBody: MoveNetworkSmDevicesRequestBody;
    networkId: string;
}
/**
 * Successful operation
 */
export declare class MoveNetworkSmDevices200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Meraki Ids of the set of devices.
     */
    ids?: string[];
    /**
     * The network to which the devices was moved.
     */
    newNetwork?: string;
}
export declare class MoveNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    moveNetworkSmDevices200ApplicationJSONObject?: MoveNetworkSmDevices200ApplicationJSON;
}
