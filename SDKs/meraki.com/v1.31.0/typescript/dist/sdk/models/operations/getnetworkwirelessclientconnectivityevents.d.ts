import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter results by band (either '2.4', '5', '6').
 */
export declare enum GetNetworkWirelessClientConnectivityEventsBandEnum {
    Two4 = "2.4",
    Five = "5",
    Six = "6"
}
export declare enum GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum {
    Bad = "bad",
    Good = "good",
    Info = "info",
    Warn = "warn"
}
/**
 * An SSID number to include. If not specified, events for all SSIDs will be returned.
 */
export declare enum GetNetworkWirelessClientConnectivityEventsSsidNumberEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Eleven = "11",
    Twelve = "12",
    Thirteen = "13",
    Fourteen = "14"
}
export declare enum GetNetworkWirelessClientConnectivityEventsTypesEnum {
    Assoc = "assoc",
    Auth = "auth",
    Connection = "connection",
    Deauth = "deauth",
    Dhcp = "dhcp",
    Disassoc = "disassoc",
    Dns = "dns",
    Roam = "roam",
    Sticky = "sticky"
}
export declare class GetNetworkWirelessClientConnectivityEventsRequest extends SpeakeasyBase {
    /**
     * Filter results by band (either '2.4', '5', '6').
     */
    band?: GetNetworkWirelessClientConnectivityEventsBandEnum;
    clientId: string;
    /**
     * Filter results by an AP's serial number.
     */
    deviceSerial?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'.
     */
    includedSeverities?: GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[];
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000.
     */
    perPage?: number;
    /**
     * An SSID number to include. If not specified, events for all SSIDs will be returned.
     */
    ssidNumber?: GetNetworkWirelessClientConnectivityEventsSsidNumberEnum;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
    /**
     * A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam', 'connection' and/or 'sticky'.
     */
    types?: GetNetworkWirelessClientConnectivityEventsTypesEnum[];
}
export declare class GetNetworkWirelessClientConnectivityEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects?: Record<string, any>[];
}
