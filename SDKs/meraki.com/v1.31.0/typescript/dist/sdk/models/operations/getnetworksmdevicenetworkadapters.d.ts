import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceNetworkAdaptersRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceNetworkAdapters200ApplicationJSON extends SpeakeasyBase {
    /**
     * The IP address of the DCHP Server.
     */
    dhcpServer?: string;
    /**
     * The IP address of the DNS Server.
     */
    dnsServer?: string;
    /**
     * The IP address of the Gateway.
     */
    gateway?: string;
    /**
     * The Meraki Id of the network adapter record.
     */
    id?: string;
    /**
     * The IP address of the network adapter.
     */
    ip?: string;
    /**
     * The MAC associated with the network adapter.
     */
    mac?: string;
    /**
     * The name of the newtwork adapter.
     */
    name?: string;
    /**
     * The subnet for the network adapter.
     */
    subnet?: string;
}
export declare class GetNetworkSmDeviceNetworkAdaptersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceNetworkAdapters200ApplicationJSONObjects?: GetNetworkSmDeviceNetworkAdapters200ApplicationJSON[];
}
