import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSyslogServersRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSyslogServers200ApplicationJSONServers extends SpeakeasyBase {
    /**
     * The IP address of the syslog server
     */
    host?: string;
    /**
     * The port of the syslog server
     */
    port?: number;
    /**
     * A list of roles for the syslog server. Options (case-insensitive): 'Wireless event log', 'Appliance event log', 'Switch event log', 'Air Marshal events', 'Flows', 'URLs', 'IDS alerts', 'Security events'
     */
    roles?: string[];
}
/**
 * Successful operation
 */
export declare class GetNetworkSyslogServers200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of the syslog servers for this network
     */
    servers?: GetNetworkSyslogServers200ApplicationJSONServers[];
}
export declare class GetNetworkSyslogServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSyslogServers200ApplicationJSONObject?: GetNetworkSyslogServers200ApplicationJSON;
}
