import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum {
    Radius = "radius",
    Snmp = "snmp",
    Syslog = "syslog"
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches extends SpeakeasyBase {
    /**
     * Switch alternative management IP. To remove a prior IP setting, provide an empty string
     */
    alternateManagementIp: string;
    /**
     * Switch gateway must be in IP format. Only and must be specified for Polaris switches
     */
    gateway?: string;
    /**
     * Switch serial number
     */
    serial: string;
    /**
     * Switch subnet mask must be in IP format. Only and must be specified for Polaris switches
     */
    subnetMask?: string;
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceRequestBody extends SpeakeasyBase {
    /**
     * Boolean value to enable or disable AMI configuration. If enabled, VLAN and protocols must be set
     */
    enabled?: boolean;
    /**
     * Can be one or more of the following values: 'radius', 'snmp' or 'syslog'
     */
    protocols?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum[];
    /**
     * Array of switch serial number and IP assignment. If parameter is present, it cannot have empty body. Note: switches parameter is not applicable for template networks, in other words, do not put 'switches' in the body when updating template networks. Also, an empty 'switches' array will remove all previous assignments
     */
    switches?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches[];
    /**
     * Alternate management VLAN, must be between 1 and 4094
     */
    vlanId?: number;
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchAlternateManagementInterfaceRequestBody;
    networkId: string;
}
export declare class UpdateNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject?: Record<string, any>;
}
