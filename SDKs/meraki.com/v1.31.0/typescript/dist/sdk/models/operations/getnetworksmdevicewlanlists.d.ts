import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceWlanListsRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceWlanLists200ApplicationJSON extends SpeakeasyBase {
    /**
     * When the Meraki record for the wlanList was created.
     */
    createdAt?: string;
    /**
     * The Meraki managed Id of the wlanList record.
     */
    id?: string;
    /**
     * An XML string containing the WLAN List for the device.
     */
    xml?: string;
}
export declare class GetNetworkSmDeviceWlanListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceWlanLists200ApplicationJSONObjects?: GetNetworkSmDeviceWlanLists200ApplicationJSON[];
}
