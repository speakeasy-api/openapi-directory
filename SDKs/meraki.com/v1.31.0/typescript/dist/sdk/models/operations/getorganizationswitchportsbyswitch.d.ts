import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSwitchPortsBySwitchRequest extends SpeakeasyBase {
    /**
     * Optional parameter to filter results by switches where the configuration has been updated after the given timestamp.
     */
    configurationUpdatedAfter?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Optional parameter to filter switchports belonging to switches by MAC address. All returned switches will have a MAC address that contains the search term or is an exact match.
     */
    mac?: string;
    /**
     * Optional parameter to filter switchports by one or more MAC addresses belonging to devices. All switchports returned belong to MAC addresses of switches that are an exact match.
     */
    macs?: string[];
    /**
     * Optional parameter to filter switchports belonging to switches by name. All returned switches will have a name that contains the search term or is an exact match.
     */
    name?: string;
    /**
     * Optional parameter to filter switchports by network.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 50. Default is 50.
     */
    perPage?: number;
    /**
     * Optional parameter to filter switchports belonging to the specified switchport profiles.
     */
    portProfileIds?: string[];
    /**
     * Optional parameter to filter switchports belonging to switches by serial number. All returned switches will have a serial number that contains the search term or is an exact match.
     */
    serial?: string;
    /**
     * Optional parameter to filter switchports belonging to switches with one or more serial numbers. All switchports returned belong to serial numbers of switches that are an exact match.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * The network that the switch belongs to
 */
export declare class GetOrganizationSwitchPortsBySwitch200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * ID of the network
     */
    id?: string;
    /**
     * Name of the network
     */
    name?: string;
}
/**
 * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
 */
export declare enum GetOrganizationSwitchPortsBySwitch200ApplicationJSONPortsAccessPolicyTypeEnum {
    CustomAccessPolicy = "Custom access policy",
    MACAllowList = "MAC allow list",
    Open = "Open",
    StickyMACAllowList = "Sticky MAC allow list"
}
/**
 * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
 */
export declare enum GetOrganizationSwitchPortsBySwitch200ApplicationJSONPortsStpGuardEnum {
    BpduGuard = "bpdu guard",
    Disabled = "disabled",
    LoopGuard = "loop guard",
    RootGuard = "root guard"
}
/**
 * The type of the switch port ('trunk' or 'access').
 */
export declare enum GetOrganizationSwitchPortsBySwitch200ApplicationJSONPortsTypeEnum {
    Access = "access",
    Trunk = "trunk"
}
export declare class GetOrganizationSwitchPortsBySwitch200ApplicationJSONPorts extends SpeakeasyBase {
    /**
     * The type of the access policy of the switch port. Only applicable to access ports. Can be one of 'Open', 'Custom access policy', 'MAC allow list' or 'Sticky MAC allow list'.
     */
    accessPolicyType?: GetOrganizationSwitchPortsBySwitch200ApplicationJSONPortsAccessPolicyTypeEnum;
    /**
     * The VLANs allowed on the switch port. Only applicable to trunk ports.
     */
    allowedVlans?: string;
    /**
     * The status of the switch port.
     */
    enabled?: boolean;
    /**
     * The link speed for the switch port.
     */
    linkNegotiation?: string;
    /**
     * The name of the switch port.
     */
    name?: string;
    /**
     * The PoE status of the switch port.
     */
    poeEnabled?: boolean;
    /**
     * The identifier of the switch port.
     */
    portId?: string;
    /**
     * The rapid spanning tree protocol status.
     */
    rstpEnabled?: boolean;
    /**
     * The initial list of MAC addresses for sticky Mac allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'.
     */
    stickyMacAllowList?: string[];
    /**
     * The maximum number of MAC addresses for sticky MAC allow list. Only applicable when 'accessPolicyType' is 'Sticky MAC allow list'.
     */
    stickyMacAllowListLimit?: number;
    /**
     * The state of the STP guard ('disabled', 'root guard', 'bpdu guard' or 'loop guard').
     */
    stpGuard?: GetOrganizationSwitchPortsBySwitch200ApplicationJSONPortsStpGuardEnum;
    /**
     * The list of tags of the switch port.
     */
    tags?: string[];
    /**
     * The type of the switch port ('trunk' or 'access').
     */
    type?: GetOrganizationSwitchPortsBySwitch200ApplicationJSONPortsTypeEnum;
    /**
     * The VLAN of the switch port. A null value will clear the value set for trunk ports.
     */
    vlan?: number;
    /**
     * The voice VLAN of the switch port. Only applicable to access ports.
     */
    voiceVlan?: number;
}
export declare class GetOrganizationSwitchPortsBySwitch200ApplicationJSON extends SpeakeasyBase {
    /**
     * MAC address of the switch
     */
    mac?: string;
    /**
     * Model of the switch
     */
    model?: string;
    /**
     * Name of the switch
     */
    name?: string;
    /**
     * The network that the switch belongs to
     */
    network?: GetOrganizationSwitchPortsBySwitch200ApplicationJSONNetwork;
    /**
     * Ports belonging to the switch
     */
    ports?: GetOrganizationSwitchPortsBySwitch200ApplicationJSONPorts[];
    /**
     * Serial of the switch
     */
    serial?: string;
}
export declare class GetOrganizationSwitchPortsBySwitchResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSwitchPortsBySwitch200ApplicationJSONObjects?: GetOrganizationSwitchPortsBySwitch200ApplicationJSON[];
}
