import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPeering } from "./networkpeering";
import { NetworkRoutingConfig } from "./networkroutingconfig";
/**
 * The network firewall policy enforcement order. Can be either AFTER_CLASSIC_FIREWALL or BEFORE_CLASSIC_FIREWALL. Defaults to AFTER_CLASSIC_FIREWALL if the field is not specified.
 */
export declare enum NetworkNetworkFirewallPolicyEnforcementOrderEnum {
    AfterClassicFirewall = "AFTER_CLASSIC_FIREWALL",
    BeforeClassicFirewall = "BEFORE_CLASSIC_FIREWALL"
}
/**
 * Represents a VPC Network resource. Networks connect resources to each other and to the internet. For more information, read Virtual Private Cloud (VPC) Network.
 */
export declare class Network extends SpeakeasyBase {
    /**
     * Deprecated in favor of subnet mode networks. The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client when the network is created.
     */
    iPv4Range?: string;
    /**
     * Must be set to create a VPC network. If not set, a legacy network is created. When set to true, the VPC network is created in auto mode. When set to false, the VPC network is created in custom mode. An auto mode VPC network starts with one subnet per region. Each subnet has a predetermined range as described in Auto mode VPC network IP ranges. For custom mode VPC networks, you can add subnets using the subnetworks insert method.
     */
    autoCreateSubnetworks?: boolean;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this field when you create the resource.
     */
    description?: string;
    /**
     * Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. .
     */
    enableUlaInternalIpv6?: boolean;
    /**
     * [Output Only] URL of the firewall policy the network is associated with.
     */
    firewallPolicy?: string;
    /**
     * [Output Only] The gateway address for default routing out of the network, selected by Google Cloud.
     */
    gatewayIPv4?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. The input must be a valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will fail if the speficied /48 is already in used by another resource. If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field. .
     */
    internalIpv6Range?: string;
    /**
     * [Output Only] Type of the resource. Always compute#network for networks.
     */
    kind?: string;
    /**
     * Maximum Transmission Unit in bytes. The minimum value for this field is 1300 and the maximum value is 8896. The suggested value is 1500, which is the default MTU used on the Internet, or 8896 if you want to use Jumbo frames. If unspecified, the value defaults to 1460.
     */
    mtu?: number;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit.
     */
    name?: string;
    /**
     * The network firewall policy enforcement order. Can be either AFTER_CLASSIC_FIREWALL or BEFORE_CLASSIC_FIREWALL. Defaults to AFTER_CLASSIC_FIREWALL if the field is not specified.
     */
    networkFirewallPolicyEnforcementOrder?: NetworkNetworkFirewallPolicyEnforcementOrderEnum;
    /**
     * [Output Only] A list of network peerings for the resource.
     */
    peerings?: NetworkPeering[];
    /**
     * A routing configuration attached to a network resource. The message includes the list of routers associated with the network, and a flag indicating the type of routing behavior to enforce network-wide.
     */
    routingConfig?: NetworkRoutingConfig;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Output Only] Server-defined fully-qualified URLs for all subnetworks in this VPC network.
     */
    subnetworks?: string[];
}
