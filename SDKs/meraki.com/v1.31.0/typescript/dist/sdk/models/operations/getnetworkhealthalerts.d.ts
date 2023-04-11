import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkHealthAlertsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkHealthAlerts200ApplicationJSONScopeApplications extends SpeakeasyBase {
    /**
     * Name of the application
     */
    name?: string;
    /**
     * URL to the application
     */
    url?: string;
}
export declare class GetNetworkHealthAlerts200ApplicationJSONScopeDevicesClients extends SpeakeasyBase {
    /**
     * Mac address of the client
     */
    mac?: string;
}
/**
 * Lldp information
 */
export declare class GetNetworkHealthAlerts200ApplicationJSONScopeDevicesLldp extends SpeakeasyBase {
    /**
     * Port Id
     */
    portId?: string;
}
export declare class GetNetworkHealthAlerts200ApplicationJSONScopeDevices extends SpeakeasyBase {
    /**
     * Clients related to the device
     */
    clients?: GetNetworkHealthAlerts200ApplicationJSONScopeDevicesClients[];
    /**
     * Lldp information
     */
    lldp?: GetNetworkHealthAlerts200ApplicationJSONScopeDevicesLldp;
    /**
     * The mac address of the device
     */
    mac?: string;
    /**
     * Name of the device
     */
    name?: string;
    /**
     * Product type of the device
     */
    productType?: string;
    /**
     * Serial number of the device
     */
    serial?: string;
    /**
     * URL to the device
     */
    url?: string;
}
/**
 * Network of the peer
 */
export declare class GetNetworkHealthAlerts200ApplicationJSONScopePeersNetwork extends SpeakeasyBase {
    /**
     * Id of the network
     */
    id?: string;
    /**
     * Name of the network
     */
    name?: string;
}
export declare class GetNetworkHealthAlerts200ApplicationJSONScopePeers extends SpeakeasyBase {
    /**
     * Network of the peer
     */
    network?: GetNetworkHealthAlerts200ApplicationJSONScopePeersNetwork;
    /**
     * URL to the peer
     */
    url?: string;
}
/**
 * The scope of the alert
 */
export declare class GetNetworkHealthAlerts200ApplicationJSONScope extends SpeakeasyBase {
    /**
     * Applications related to the alert
     */
    applications?: GetNetworkHealthAlerts200ApplicationJSONScopeApplications[];
    /**
     * Devices related to the alert
     */
    devices?: GetNetworkHealthAlerts200ApplicationJSONScopeDevices[];
    /**
     * Peers related to the alert
     */
    peers?: GetNetworkHealthAlerts200ApplicationJSONScopePeers[];
}
/**
 * Severity of the alert
 */
export declare enum GetNetworkHealthAlerts200ApplicationJSONSeverityEnum {
    Error = "error",
    Info = "info",
    Warning = "warning"
}
export declare class GetNetworkHealthAlerts200ApplicationJSON extends SpeakeasyBase {
    /**
     * Category of the alert
     */
    category?: string;
    /**
     * Alert identifier. Value can be empty
     */
    id?: string;
    /**
     * The scope of the alert
     */
    scope?: GetNetworkHealthAlerts200ApplicationJSONScope;
    /**
     * Severity of the alert
     */
    severity?: GetNetworkHealthAlerts200ApplicationJSONSeverityEnum;
    /**
     * Alert type
     */
    type?: string;
}
export declare class GetNetworkHealthAlertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkHealthAlerts200ApplicationJSONObjects?: GetNetworkHealthAlerts200ApplicationJSON[];
}
