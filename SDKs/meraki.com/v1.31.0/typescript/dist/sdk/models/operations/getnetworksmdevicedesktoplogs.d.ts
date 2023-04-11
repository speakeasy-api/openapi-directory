import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceDesktopLogsRequest extends SpeakeasyBase {
    deviceId: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
export declare class GetNetworkSmDeviceDesktopLogs200ApplicationJSON extends SpeakeasyBase {
    /**
     * The IP address of the DCHP Server.
     */
    dhcpServer?: string;
    /**
     * The DNS Server during the connection.
     */
    dnsServer?: string;
    /**
     * The gateway IP the device was connected to.
     */
    gateway?: string;
    /**
     * The IP of the device during connection.
     */
    ip?: string;
    /**
     * The time the data was measured at.
     */
    measuredAt?: string;
    /**
     * The network device for the device used for connection.
     */
    networkDevice?: string;
    /**
     * The network driver for the device.
     */
    networkDriver?: string;
    /**
     * The network max transmission unit.
     */
    networkMTU?: string;
    /**
     * The public IP address of the device.
     */
    publicIP?: string;
    /**
     * The subnet of the device connection.
     */
    subnet?: string;
    /**
     * The time the connection was logged.
     */
    ts?: string;
    /**
     * The user during connection.
     */
    user?: string;
    /**
     * The type of authentication used by the SSID.
     */
    wifiAuth?: string;
    /**
     * The MAC of the access point the device is connected to.
     */
    wifiBssid?: string;
    /**
     * Channel through which the connection is routing.
     */
    wifiChannel?: string;
    /**
     * The wireless signal power level received by the device.
     */
    wifiNoise?: string;
    /**
     * The Received Signal Strength Indicator for the device.
     */
    wifiRssi?: string;
    /**
     * The name of the network the device is connected to.
     */
    wifiSsid?: string;
}
export declare class GetNetworkSmDeviceDesktopLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceDesktopLogs200ApplicationJSONObjects?: GetNetworkSmDeviceDesktopLogs200ApplicationJSON[];
}
