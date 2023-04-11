import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientsRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
}
/**
 * The connection status of the client
 */
export declare enum GetNetworkClients200ApplicationJSONStatusEnum {
    Offline = "Offline",
    Online = "Online"
}
/**
 * Usage, sent and received
 */
export declare class GetNetworkClients200ApplicationJSONUsage extends SpeakeasyBase {
    /**
     * Usage received by the client
     */
    recv?: number;
    /**
     * Usage sent by the client
     */
    sent?: number;
}
/**
 * Successful operation
 */
export declare class GetNetworkClients200ApplicationJSON extends SpeakeasyBase {
    /**
     * Short description of the client
     */
    description?: string;
    /**
     * Timestamp client was first seen in the network
     */
    firstSeen?: number;
    /**
     * 802.1x group policy of the client
     */
    groupPolicy8021x?: string;
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
     * Local IPv6 address of the client
     */
    ip6Local?: string;
    /**
     * Timestamp client was last seen in the network
     */
    lastSeen?: number;
    /**
     * The MAC address of the client
     */
    mac?: string;
    /**
     * Manufacturer of the client
     */
    manufacturer?: string;
    /**
     * Notes on the client
     */
    notes?: string;
    /**
     * The operating system of the client
     */
    os?: string;
    /**
     * The MAC address of the node that the device was last connected to
     */
    recentDeviceMac?: string;
    /**
     * The name of the node the device was last connected to
     */
    recentDeviceName?: string;
    /**
     * The serial of the node the device was last connected to
     */
    recentDeviceSerial?: string;
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
    status?: GetNetworkClients200ApplicationJSONStatusEnum;
    /**
     * The switch port that the client is connected to
     */
    switchport?: string;
    /**
     * Usage, sent and received
     */
    usage?: GetNetworkClients200ApplicationJSONUsage;
    /**
     * The username of the user of the client
     */
    user?: string;
    /**
     * The name of the VLAN that the client is connected to
     */
    vlan?: string;
}
export declare class GetNetworkClientsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClients200ApplicationJSONObject?: GetNetworkClients200ApplicationJSON;
}
