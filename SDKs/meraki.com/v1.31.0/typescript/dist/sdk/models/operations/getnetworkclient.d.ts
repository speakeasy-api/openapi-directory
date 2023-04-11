import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientRequest extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClient200ApplicationJSONClientVpnConnections extends SpeakeasyBase {
    /**
     * The time the client last connected to the VPN
     */
    connectedAt?: number;
    /**
     * The time the client last disconnectd from the VPN
     */
    disconnectedAt?: number;
    /**
     * The IP address of the VPN the client last connected to
     */
    remoteIp?: string;
}
/**
 * The connection status of the client
 */
export declare enum GetNetworkClient200ApplicationJSONStatusEnum {
    Offline = "Offline",
    Online = "Online"
}
/**
 * Successful operation
 */
export declare class GetNetworkClient200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Cisco discover protocol settings for the client
     */
    cdp?: string[][];
    /**
     * VPN connections associated with the client
     */
    clientVpnConnections?: GetNetworkClient200ApplicationJSONClientVpnConnections[];
    /**
     * Short description of the client
     */
    description?: string;
    /**
     * Timestamp client was first seen in the network
     */
    firstSeen?: number;
    /**
     * The ID of the client
     */
    id?: string;
    /**
     * The IP address of the client
     */
    ip?: string;
    /**
     * The IPv6 address of the client
     */
    ip6?: string;
    /**
     * Timestamp client was last seen in the network
     */
    lastSeen?: number;
    /**
     * The link layer discover protocol settings for the client
     */
    lldp?: string[][];
    /**
     * The MAC address of the client
     */
    mac?: string;
    /**
     * Manufacturer of the client
     */
    manufacturer?: string;
    /**
     * The operating system of the client
     */
    os?: string;
    /**
     * The MAC address of the node that the device was last connected to
     */
    recentDeviceMac?: string;
    /**
     * Status of SM for the client
     */
    smInstalled?: boolean;
    /**
     * The name of the SSID that the client is connected to
     */
    ssid?: string;
    /**
     * The connection status of the client
     */
    status?: GetNetworkClient200ApplicationJSONStatusEnum;
    /**
     * The switch port that the client is connected to
     */
    switchport?: string;
    /**
     * The username of the user of the client
     */
    user?: string;
    /**
     * The name of the VLAN that the client is connected to
     */
    vlan?: string;
    /**
     * Wireless capabilities of the client
     */
    wirelessCapabilities?: string;
}
export declare class GetNetworkClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClient200ApplicationJSONObject?: GetNetworkClient200ApplicationJSON;
}
