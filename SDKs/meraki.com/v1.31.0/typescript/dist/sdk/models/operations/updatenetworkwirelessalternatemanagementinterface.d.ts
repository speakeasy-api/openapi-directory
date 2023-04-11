import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints extends SpeakeasyBase {
    /**
     * Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
     */
    alternateManagementIp: string;
    /**
     * Primary DNS must be in IP format
     */
    dns1?: string;
    /**
     * Optional secondary DNS must be in IP format
     */
    dns2?: string;
    /**
     * Gateway must be in IP format
     */
    gateway?: string;
    /**
     * Serial number of access point to be configured with alternate management IP
     */
    serial: string;
    /**
     * Subnet mask must be in IP format
     */
    subnetMask?: string;
}
export declare enum UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Ldap = "ldap",
    Radius = "radius",
    Snmp = "snmp",
    Syslog = "syslog"
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
    /**
     * Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put 'accessPoints' in the body when updating template networks. Also, an empty 'accessPoints' array will remove all previous static IP assignments
     */
    accessPoints?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints[];
    /**
     * Boolean value to enable or disable alternate management interface
     */
    enabled?: boolean;
    /**
     * Can be one or more of the following values: 'radius', 'snmp', 'syslog' or 'ldap'
     */
    protocols?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum[];
    /**
     * Alternate management interface VLAN, must be between 1 and 4094
     */
    vlanId?: number;
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessAlternateManagementInterfaceRequestBody;
    networkId: string;
}
export declare class UpdateNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject?: Record<string, any>;
}
