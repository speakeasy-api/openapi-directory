import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the origin
 */
export declare enum CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type: CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the VLAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
    /**
     * Manual configuration of the IPv6 Appliance IP
     */
    staticApplianceIp6?: string;
    /**
     * Manual configuration of a /64 prefix on the VLAN
     */
    staticPrefix?: string;
}
/**
 * IPv6 configuration on the VLAN
 */
export declare class CreateNetworkApplianceVlanRequestBodyIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on VLAN.
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the VLAN
     */
    prefixAssignments?: CreateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class CreateNetworkApplianceVlanRequestBodyMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on VLAN.
     */
    enabled?: boolean;
}
/**
 * Type of subnetting of the VLAN. Applicable only for template network.
 */
export declare enum CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum {
    Same = "same",
    Unique = "unique"
}
export declare class CreateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the VLAN
     */
    applianceIp?: string;
    /**
     * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
     */
    cidr?: string;
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    groupPolicyId?: string;
    /**
     * The VLAN ID of the new VLAN (must be between 1 and 4094)
     */
    id: string;
    /**
     * IPv6 configuration on the VLAN
     */
    ipv6?: CreateNetworkApplianceVlanRequestBodyIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: CreateNetworkApplianceVlanRequestBodyMandatoryDhcp;
    /**
     * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
     */
    mask?: number;
    /**
     * The name of the new VLAN
     */
    name: string;
    /**
     * The subnet of the VLAN
     */
    subnet?: string;
    /**
     * Type of subnetting of the VLAN. Applicable only for template network.
     */
    templateVlanType?: CreateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;
}
export declare class CreateNetworkApplianceVlanRequest extends SpeakeasyBase {
    requestBody: CreateNetworkApplianceVlanRequestBody;
    networkId: string;
}
/**
 * Type of the origin
 */
export declare enum CreateNetworkApplianceVlan201ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class CreateNetworkApplianceVlan201ApplicationJSONIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type?: CreateNetworkApplianceVlan201ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class CreateNetworkApplianceVlan201ApplicationJSONIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the VLAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: CreateNetworkApplianceVlan201ApplicationJSONIpv6PrefixAssignmentsOrigin;
    /**
     * Manual configuration of the IPv6 Appliance IP
     */
    staticApplianceIp6?: string;
    /**
     * Manual configuration of a /64 prefix on the VLAN
     */
    staticPrefix?: string;
}
/**
 * IPv6 configuration on the VLAN
 */
export declare class CreateNetworkApplianceVlan201ApplicationJSONIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on VLAN
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the VLAN
     */
    prefixAssignments?: CreateNetworkApplianceVlan201ApplicationJSONIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class CreateNetworkApplianceVlan201ApplicationJSONMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on VLAN.
     */
    enabled?: boolean;
}
/**
 * Type of subnetting of the VLAN. Applicable only for template network.
 */
export declare enum CreateNetworkApplianceVlan201ApplicationJSONTemplateVlanTypeEnum {
    Same = "same",
    Unique = "unique"
}
/**
 * Successful operation
 */
export declare class CreateNetworkApplianceVlan201ApplicationJSON extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the VLAN
     */
    applianceIp?: string;
    /**
     * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
     */
    cidr?: string;
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    groupPolicyId?: string;
    /**
     * The VLAN ID of the VLAN
     */
    id?: string;
    /**
     * The interface ID of the VLAN
     */
    interfaceId?: string;
    /**
     * IPv6 configuration on the VLAN
     */
    ipv6?: CreateNetworkApplianceVlan201ApplicationJSONIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: CreateNetworkApplianceVlan201ApplicationJSONMandatoryDhcp;
    /**
     * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
     */
    mask?: number;
    /**
     * The name of the VLAN
     */
    name?: string;
    /**
     * The subnet of the VLAN
     */
    subnet?: string;
    /**
     * Type of subnetting of the VLAN. Applicable only for template network.
     */
    templateVlanType?: CreateNetworkApplianceVlan201ApplicationJSONTemplateVlanTypeEnum;
}
export declare class CreateNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkApplianceVlan201ApplicationJSONObject?: CreateNetworkApplianceVlan201ApplicationJSON;
}
