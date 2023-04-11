import { SpeakeasyBase } from "../../../internal/utils";
import { UsableSubnetworkSecondaryRange } from "./usablesubnetworksecondaryrange";
/**
 * The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack.
 */
export declare enum UsableSubnetworkIpv6AccessTypeEnum {
    External = "EXTERNAL",
    Internal = "INTERNAL"
}
/**
 * The purpose of the resource. This field can be either PRIVATE_RFC_1918 or INTERNAL_HTTPS_LOAD_BALANCER. A subnetwork with purpose set to INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is reserved for Internal HTTP(S) Load Balancing. If unspecified, the purpose defaults to PRIVATE_RFC_1918. The enableFlowLogs field isn't supported with the purpose field set to INTERNAL_HTTPS_LOAD_BALANCER.
 */
export declare enum UsableSubnetworkPurposeEnum {
    InternalHttpsLoadBalancer = "INTERNAL_HTTPS_LOAD_BALANCER",
    Private = "PRIVATE",
    PrivateRfc1918 = "PRIVATE_RFC_1918",
    PrivateServiceConnect = "PRIVATE_SERVICE_CONNECT",
    RegionalManagedProxy = "REGIONAL_MANAGED_PROXY"
}
/**
 * The role of subnetwork. Currently, this field is only used when purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request.
 */
export declare enum UsableSubnetworkRoleEnum {
    Active = "ACTIVE",
    Backup = "BACKUP"
}
/**
 * The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set to IPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used. This field can be both set at resource creation time and updated using patch.
 */
export declare enum UsableSubnetworkStackTypeEnum {
    Ipv4Ipv6 = "IPV4_IPV6",
    Ipv4Only = "IPV4_ONLY"
}
/**
 * Subnetwork which the current user has compute.subnetworks.use permission on.
 */
export declare class UsableSubnetwork extends SpeakeasyBase {
    /**
     * [Output Only] The external IPv6 address range that is assigned to this subnetwork.
     */
    externalIpv6Prefix?: string;
    /**
     * [Output Only] The internal IPv6 address range that is assigned to this subnetwork.
     */
    internalIpv6Prefix?: string;
    /**
     * The range of internal addresses that are owned by this subnetwork.
     */
    ipCidrRange?: string;
    /**
     * The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation or the first time the subnet is updated into IPV4_IPV6 dual stack.
     */
    ipv6AccessType?: UsableSubnetworkIpv6AccessTypeEnum;
    /**
     * Network URL.
     */
    network?: string;
    /**
     * The purpose of the resource. This field can be either PRIVATE_RFC_1918 or INTERNAL_HTTPS_LOAD_BALANCER. A subnetwork with purpose set to INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is reserved for Internal HTTP(S) Load Balancing. If unspecified, the purpose defaults to PRIVATE_RFC_1918. The enableFlowLogs field isn't supported with the purpose field set to INTERNAL_HTTPS_LOAD_BALANCER.
     */
    purpose?: UsableSubnetworkPurposeEnum;
    /**
     * The role of subnetwork. Currently, this field is only used when purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE or BACKUP. An ACTIVE subnetwork is one that is currently being used for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that is ready to be promoted to ACTIVE or is currently draining. This field can be updated with a patch request.
     */
    role?: UsableSubnetworkRoleEnum;
    /**
     * Secondary IP ranges.
     */
    secondaryIpRanges?: UsableSubnetworkSecondaryRange[];
    /**
     * The stack type for the subnet. If set to IPV4_ONLY, new VMs in the subnet are assigned IPv4 addresses only. If set to IPV4_IPV6, new VMs in the subnet can be assigned both IPv4 and IPv6 addresses. If not specified, IPV4_ONLY is used. This field can be both set at resource creation time and updated using patch.
     */
    stackType?: UsableSubnetworkStackTypeEnum;
    /**
     * Subnetwork URL.
     */
    subnetwork?: string;
}
