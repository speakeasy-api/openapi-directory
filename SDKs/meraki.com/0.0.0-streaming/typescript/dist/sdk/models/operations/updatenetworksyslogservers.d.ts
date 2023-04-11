import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkSyslogServersRequestBodyServers extends SpeakeasyBase {
    /**
     * The IP address of the syslog server
     */
    host: string;
    /**
     * The port of the syslog server
     */
    port: number;
    /**
     * A list of roles for the syslog server. Options (case-insensitive): 'Wireless event log', 'Appliance event log', 'Switch event log', 'Air Marshal events', 'Flows', 'URLs', 'IDS alerts', 'Security events'
     */
    roles: string[];
}
export declare class UpdateNetworkSyslogServersRequestBody extends SpeakeasyBase {
    /**
     * A list of the syslog servers for this network
     */
    servers: UpdateNetworkSyslogServersRequestBodyServers[];
}
export declare class UpdateNetworkSyslogServersRequest extends SpeakeasyBase {
    requestBody: UpdateNetworkSyslogServersRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSyslogServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSyslogServers200ApplicationJSONObjects?: Record<string, any>[];
}
