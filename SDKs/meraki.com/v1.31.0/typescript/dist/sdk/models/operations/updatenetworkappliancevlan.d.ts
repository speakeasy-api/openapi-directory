import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
 */
export declare enum UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum {
    DoNotRespondToDHCPRequests = "Do not respond to DHCP requests",
    RelayDHCPToAnotherServer = "Relay DHCP to another server",
    RunADHCPServer = "Run a DHCP server"
}
/**
 * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
 */
export declare enum UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    TwelveHours = "12 hours",
    ThirtyMinutes = "30 minutes",
    FourHours = "4 hours"
}
/**
 * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
 */
export declare enum UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum {
    Hex = "hex",
    Integer = "integer",
    Ip = "ip",
    Text = "text"
}
export declare class UpdateNetworkApplianceVlanRequestBodyDhcpOptions extends SpeakeasyBase {
    /**
     * The code for the DHCP option. This should be an integer between 2 and 254.
     */
    code: string;
    /**
     * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
     */
    type: UpdateNetworkApplianceVlanRequestBodyDhcpOptionsTypeEnum;
    /**
     * The value for the DHCP option
     */
    value: string;
}
/**
 * Type of the origin
 */
export declare enum UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type: UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the VLAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignmentsOrigin;
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
export declare class UpdateNetworkApplianceVlanRequestBodyIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on VLAN.
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the VLAN
     */
    prefixAssignments?: UpdateNetworkApplianceVlanRequestBodyIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on VLAN.
     */
    enabled?: boolean;
}
export declare class UpdateNetworkApplianceVlanRequestBodyReservedIpRanges extends SpeakeasyBase {
    /**
     * A text comment for the reserved range
     */
    comment: string;
    /**
     * The last IP in the reserved range
     */
    end: string;
    /**
     * The first IP in the reserved range
     */
    start: string;
}
/**
 * Type of subnetting of the VLAN. Applicable only for template network.
 */
export declare enum UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum {
    Same = "same",
    Unique = "unique"
}
export declare class UpdateNetworkApplianceVlanRequestBody extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the VLAN
     */
    applianceIp?: string;
    /**
     * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
     */
    cidr?: string;
    /**
     * DHCP boot option for boot filename
     */
    dhcpBootFilename?: string;
    /**
     * DHCP boot option to direct boot clients to the server to load the boot file from
     */
    dhcpBootNextServer?: string;
    /**
     * Use DHCP boot options specified in other properties
     */
    dhcpBootOptionsEnabled?: boolean;
    /**
     * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
     */
    dhcpHandling?: UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum;
    /**
     * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
     */
    dhcpLeaseTime?: UpdateNetworkApplianceVlanRequestBodyDhcpLeaseTimeEnum;
    /**
     * The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.
     */
    dhcpOptions?: UpdateNetworkApplianceVlanRequestBodyDhcpOptions[];
    /**
     * The IPs of the DHCP servers that DHCP requests should be relayed to
     */
    dhcpRelayServerIps?: string[];
    /**
     * The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names
     */
    dnsNameservers?: string;
    /**
     * The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
     */
    fixedIpAssignments?: Record<string, any>;
    /**
     * The id of the desired group policy to apply to the VLAN
     */
    groupPolicyId?: string;
    /**
     * IPv6 configuration on the VLAN
     */
    ipv6?: UpdateNetworkApplianceVlanRequestBodyIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: UpdateNetworkApplianceVlanRequestBodyMandatoryDhcp;
    /**
     * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
     */
    mask?: number;
    /**
     * The name of the VLAN
     */
    name?: string;
    /**
     * The DHCP reserved IP ranges on the VLAN
     */
    reservedIpRanges?: UpdateNetworkApplianceVlanRequestBodyReservedIpRanges[];
    /**
     * The subnet of the VLAN
     */
    subnet?: string;
    /**
     * Type of subnetting of the VLAN. Applicable only for template network.
     */
    templateVlanType?: UpdateNetworkApplianceVlanRequestBodyTemplateVlanTypeEnum;
    /**
     * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
     */
    vpnNatSubnet?: string;
}
export declare class UpdateNetworkApplianceVlanRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkApplianceVlanRequestBody;
    networkId: string;
    vlanId: string;
}
/**
 * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
 */
export declare enum UpdateNetworkApplianceVlan200ApplicationJSONDhcpHandlingEnum {
    DoNotRespondToDHCPRequests = "Do not respond to DHCP requests",
    RelayDHCPToAnotherServer = "Relay DHCP to another server",
    RunADHCPServer = "Run a DHCP server"
}
/**
 * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
 */
export declare enum UpdateNetworkApplianceVlan200ApplicationJSONDhcpLeaseTimeEnum {
    OneDay = "1 day",
    OneHour = "1 hour",
    OneWeek = "1 week",
    TwelveHours = "12 hours",
    ThirtyMinutes = "30 minutes",
    FourHours = "4 hours"
}
/**
 * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
 */
export declare enum UpdateNetworkApplianceVlan200ApplicationJSONDhcpOptionsTypeEnum {
    Hex = "hex",
    Integer = "integer",
    Ip = "ip",
    Text = "text"
}
export declare class UpdateNetworkApplianceVlan200ApplicationJSONDhcpOptions extends SpeakeasyBase {
    /**
     * The code for the DHCP option. This should be an integer between 2 and 254.
     */
    code: string;
    /**
     * The type for the DHCP option. One of: 'text', 'ip', 'hex' or 'integer'
     */
    type: UpdateNetworkApplianceVlan200ApplicationJSONDhcpOptionsTypeEnum;
    /**
     * The value for the DHCP option
     */
    value: string;
}
/**
 * Type of the origin
 */
export declare enum UpdateNetworkApplianceVlan200ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum {
    Independent = "independent",
    Internet = "internet"
}
/**
 * The origin of the prefix
 */
export declare class UpdateNetworkApplianceVlan200ApplicationJSONIpv6PrefixAssignmentsOrigin extends SpeakeasyBase {
    /**
     * Interfaces associated with the prefix
     */
    interfaces?: string[];
    /**
     * Type of the origin
     */
    type?: UpdateNetworkApplianceVlan200ApplicationJSONIpv6PrefixAssignmentsOriginTypeEnum;
}
export declare class UpdateNetworkApplianceVlan200ApplicationJSONIpv6PrefixAssignments extends SpeakeasyBase {
    /**
     * Auto assign a /64 prefix from the origin to the VLAN
     */
    autonomous?: boolean;
    /**
     * The origin of the prefix
     */
    origin?: UpdateNetworkApplianceVlan200ApplicationJSONIpv6PrefixAssignmentsOrigin;
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
export declare class UpdateNetworkApplianceVlan200ApplicationJSONIpv6 extends SpeakeasyBase {
    /**
     * Enable IPv6 on VLAN
     */
    enabled?: boolean;
    /**
     * Prefix assignments on the VLAN
     */
    prefixAssignments?: UpdateNetworkApplianceVlan200ApplicationJSONIpv6PrefixAssignments[];
}
/**
 * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
 */
export declare class UpdateNetworkApplianceVlan200ApplicationJSONMandatoryDhcp extends SpeakeasyBase {
    /**
     * Enable Mandatory DHCP on VLAN.
     */
    enabled?: boolean;
}
export declare class UpdateNetworkApplianceVlan200ApplicationJSONReservedIpRanges extends SpeakeasyBase {
    /**
     * A text comment for the reserved range
     */
    comment?: string;
    /**
     * The last IP in the reserved range
     */
    end?: string;
    /**
     * The first IP in the reserved range
     */
    start?: string;
}
/**
 * Type of subnetting of the VLAN. Applicable only for template network.
 */
export declare enum UpdateNetworkApplianceVlan200ApplicationJSONTemplateVlanTypeEnum {
    Same = "same",
    Unique = "unique"
}
/**
 * Successful operation
 */
export declare class UpdateNetworkApplianceVlan200ApplicationJSON extends SpeakeasyBase {
    /**
     * The local IP of the appliance on the VLAN
     */
    applianceIp?: string;
    /**
     * CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN.
     */
    cidr?: string;
    /**
     * DHCP boot option for boot filename
     */
    dhcpBootFilename?: string;
    /**
     * DHCP boot option to direct boot clients to the server to load the boot file from
     */
    dhcpBootNextServer?: string;
    /**
     * Use DHCP boot options specified in other properties
     */
    dhcpBootOptionsEnabled?: boolean;
    /**
     * The appliance's handling of DHCP requests on this VLAN. One of: 'Run a DHCP server', 'Relay DHCP to another server' or 'Do not respond to DHCP requests'
     */
    dhcpHandling?: UpdateNetworkApplianceVlan200ApplicationJSONDhcpHandlingEnum;
    /**
     * The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: '30 minutes', '1 hour', '4 hours', '12 hours', '1 day' or '1 week'
     */
    dhcpLeaseTime?: UpdateNetworkApplianceVlan200ApplicationJSONDhcpLeaseTimeEnum;
    /**
     * The list of DHCP options that will be included in DHCP responses. Each object in the list should have "code", "type", and "value" properties.
     */
    dhcpOptions?: UpdateNetworkApplianceVlan200ApplicationJSONDhcpOptions[];
    /**
     * The IPs of the DHCP servers that DHCP requests should be relayed to
     */
    dhcpRelayServerIps?: string[];
    /**
     * The DNS nameservers used for DHCP responses, either "upstream_dns", "google_dns", "opendns", or a newline seperated string of IP addresses or domain names
     */
    dnsNameservers?: string;
    /**
     * The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain "ip" and "name" string fields. See the sample request/response for more details.
     */
    fixedIpAssignments?: Record<string, any>;
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
    ipv6?: UpdateNetworkApplianceVlan200ApplicationJSONIpv6;
    /**
     * Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above
     */
    mandatoryDhcp?: UpdateNetworkApplianceVlan200ApplicationJSONMandatoryDhcp;
    /**
     * Mask used for the subnet of all bound to the template networks. Applicable only for template network.
     */
    mask?: number;
    /**
     * The name of the VLAN
     */
    name?: string;
    /**
     * The DHCP reserved IP ranges on the VLAN
     */
    reservedIpRanges?: UpdateNetworkApplianceVlan200ApplicationJSONReservedIpRanges[];
    /**
     * The subnet of the VLAN
     */
    subnet?: string;
    /**
     * Type of subnetting of the VLAN. Applicable only for template network.
     */
    templateVlanType?: UpdateNetworkApplianceVlan200ApplicationJSONTemplateVlanTypeEnum;
    /**
     * The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN
     */
    vpnNatSubnet?: string;
}
export declare class UpdateNetworkApplianceVlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkApplianceVlan200ApplicationJSONObject?: UpdateNetworkApplianceVlan200ApplicationJSON;
}
