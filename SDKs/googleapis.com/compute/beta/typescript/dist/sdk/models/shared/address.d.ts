import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of address to reserve, either INTERNAL or EXTERNAL. If unspecified, defaults to EXTERNAL.
 */
export declare enum AddressAddressTypeEnum {
    External = "EXTERNAL",
    Internal = "INTERNAL",
    UnspecifiedType = "UNSPECIFIED_TYPE"
}
/**
 * The IP version that will be used by this address. Valid options are IPV4 or IPV6. This can only be specified for a global address.
 */
export declare enum AddressIpVersionEnum {
    Ipv4 = "IPV4",
    Ipv6 = "IPV6",
    UnspecifiedVersion = "UNSPECIFIED_VERSION"
}
/**
 * The endpoint type of this address, which should be VM or NETLB. This is used for deciding which type of endpoint this address can be used after the external IPv6 address reservation.
 */
export declare enum AddressIpv6EndpointTypeEnum {
    Netlb = "NETLB",
    Vm = "VM"
}
/**
 * This signifies the networking tier used for configuring this address and can only take the following values: PREMIUM or STANDARD. Internal IP addresses are always Premium Tier; global external IP addresses are always Premium Tier; regional external IP addresses can be either Standard or Premium Tier. If this field is not specified, it is assumed to be PREMIUM.
 */
export declare enum AddressNetworkTierEnum {
    FixedStandard = "FIXED_STANDARD",
    Premium = "PREMIUM",
    Standard = "STANDARD",
    StandardOverridesFixedStandard = "STANDARD_OVERRIDES_FIXED_STANDARD"
}
/**
 * The purpose of this resource, which can be one of the following values: - GCE_ENDPOINT for addresses that are used by VM instances, alias IP ranges, load balancers, and similar resources. - DNS_RESOLVER for a DNS resolver address in a subnetwork for a Cloud DNS inbound forwarder IP addresses (regional internal IP address in a subnet of a VPC network) - VPC_PEERING for global internal IP addresses used for private services access allocated ranges. - NAT_AUTO for the regional external IP addresses used by Cloud NAT when allocating addresses using automatic NAT IP address allocation. - IPSEC_INTERCONNECT for addresses created from a private IP range that are reserved for a VLAN attachment in an *HA VPN over Cloud Interconnect* configuration. These addresses are regional resources. - `SHARED_LOADBALANCER_VIP` for an internal IP address that is assigned to multiple internal forwarding rules. - `PRIVATE_SERVICE_CONNECT` for a private network address that is used to configure Private Service Connect. Only global internal addresses can use this purpose.
 */
export declare enum AddressPurposeEnum {
    DnsResolver = "DNS_RESOLVER",
    GceEndpoint = "GCE_ENDPOINT",
    IpsecInterconnect = "IPSEC_INTERCONNECT",
    NatAuto = "NAT_AUTO",
    PrivateServiceConnect = "PRIVATE_SERVICE_CONNECT",
    Serverless = "SERVERLESS",
    SharedLoadbalancerVip = "SHARED_LOADBALANCER_VIP",
    VpcPeering = "VPC_PEERING"
}
/**
 * [Output Only] The status of the address, which can be one of RESERVING, RESERVED, or IN_USE. An address that is RESERVING is currently in the process of being reserved. A RESERVED address is currently reserved and available to use. An IN_USE address is currently being used by another resource and is not available.
 */
export declare enum AddressStatusEnum {
    InUse = "IN_USE",
    Reserved = "RESERVED",
    Reserving = "RESERVING"
}
/**
 * Represents an IP Address resource. Google Compute Engine has two IP Address resources: * [Global (external and internal)](https://cloud.google.com/compute/docs/reference/rest/beta/globalAddresses) * [Regional (external and internal)](https://cloud.google.com/compute/docs/reference/rest/beta/addresses) For more information, see Reserving a static external IP address.
 */
export declare class Address extends SpeakeasyBase {
    /**
     * The static IP address represented by this resource.
     */
    address?: string;
    /**
     * The type of address to reserve, either INTERNAL or EXTERNAL. If unspecified, defaults to EXTERNAL.
     */
    addressType?: AddressAddressTypeEnum;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this field when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * The IP version that will be used by this address. Valid options are IPV4 or IPV6. This can only be specified for a global address.
     */
    ipVersion?: AddressIpVersionEnum;
    /**
     * The endpoint type of this address, which should be VM or NETLB. This is used for deciding which type of endpoint this address can be used after the external IPv6 address reservation.
     */
    ipv6EndpointType?: AddressIpv6EndpointTypeEnum;
    /**
     * [Output Only] Type of the resource. Always compute#address for addresses.
     */
    kind?: string;
    /**
     * A fingerprint for the labels being applied to this Address, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels, otherwise the request will fail with error 412 conditionNotMet. To see the latest fingerprint, make a get() request to retrieve an Address.
     */
    labelFingerprint?: string;
    /**
     * Labels for this resource. These can only be added or modified by the setLabels method. Each label key/value pair must comply with RFC1035. Label values may be empty.
     */
    labels?: Record<string, string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?`. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit.
     */
    name?: string;
    /**
     * The URL of the network in which to reserve the address. This field can only be used with INTERNAL type with the VPC_PEERING purpose.
     */
    network?: string;
    /**
     * This signifies the networking tier used for configuring this address and can only take the following values: PREMIUM or STANDARD. Internal IP addresses are always Premium Tier; global external IP addresses are always Premium Tier; regional external IP addresses can be either Standard or Premium Tier. If this field is not specified, it is assumed to be PREMIUM.
     */
    networkTier?: AddressNetworkTierEnum;
    /**
     * The prefix length if the resource represents an IP range.
     */
    prefixLength?: number;
    /**
     * The purpose of this resource, which can be one of the following values: - GCE_ENDPOINT for addresses that are used by VM instances, alias IP ranges, load balancers, and similar resources. - DNS_RESOLVER for a DNS resolver address in a subnetwork for a Cloud DNS inbound forwarder IP addresses (regional internal IP address in a subnet of a VPC network) - VPC_PEERING for global internal IP addresses used for private services access allocated ranges. - NAT_AUTO for the regional external IP addresses used by Cloud NAT when allocating addresses using automatic NAT IP address allocation. - IPSEC_INTERCONNECT for addresses created from a private IP range that are reserved for a VLAN attachment in an *HA VPN over Cloud Interconnect* configuration. These addresses are regional resources. - `SHARED_LOADBALANCER_VIP` for an internal IP address that is assigned to multiple internal forwarding rules. - `PRIVATE_SERVICE_CONNECT` for a private network address that is used to configure Private Service Connect. Only global internal addresses can use this purpose.
     */
    purpose?: AddressPurposeEnum;
    /**
     * [Output Only] The URL of the region where a regional address resides. For regional addresses, you must specify the region as a path parameter in the HTTP request URL. *This field is not applicable to global addresses.*
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The status of the address, which can be one of RESERVING, RESERVED, or IN_USE. An address that is RESERVING is currently in the process of being reserved. A RESERVED address is currently reserved and available to use. An IN_USE address is currently being used by another resource and is not available.
     */
    status?: AddressStatusEnum;
    /**
     * The URL of the subnetwork in which to reserve the address. If an IP address is specified, it must be within the subnetwork's IP range. This field can only be used with INTERNAL type with a GCE_ENDPOINT or DNS_RESOLVER purpose.
     */
    subnetwork?: string;
    /**
     * [Output Only] The URLs of the resources that are using this address.
     */
    users?: string[];
}
