import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This signifies the networking tier used for configuring this access configuration and can only take the following values: PREMIUM, STANDARD. If an AccessConfig is specified without a valid external IP address, an ephemeral IP will be created with this networkTier. If an AccessConfig with a valid external IP address is specified, it must match that of the networkTier associated with the Address resource owning that IP.
 */
export declare enum AccessConfigNetworkTierEnum {
    FixedStandard = "FIXED_STANDARD",
    Premium = "PREMIUM",
    Select = "SELECT",
    Standard = "STANDARD",
    StandardOverridesFixedStandard = "STANDARD_OVERRIDES_FIXED_STANDARD"
}
/**
 * The type of configuration. The default and only option is ONE_TO_ONE_NAT.
 */
export declare enum AccessConfigTypeEnum {
    DirectIpv6 = "DIRECT_IPV6",
    OneToOneNat = "ONE_TO_ONE_NAT"
}
/**
 * An access configuration attached to an instance's network interface. Only one access config per instance is supported.
 */
export declare class AccessConfig extends SpeakeasyBase {
    /**
     * The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.
     */
    externalIpv6?: string;
    /**
     * The prefix length of the external IPv6 range.
     */
    externalIpv6PrefixLength?: number;
    /**
     * [Output Only] Type of the resource. Always compute#accessConfig for access configs.
     */
    kind?: string;
    /**
     * The name of this access configuration. The default and recommended name is External NAT, but you can use any arbitrary string, such as My external IP or Network Access.
     */
    name?: string;
    /**
     * An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the zone of the instance.
     */
    natIP?: string;
    /**
     * This signifies the networking tier used for configuring this access configuration and can only take the following values: PREMIUM, STANDARD. If an AccessConfig is specified without a valid external IP address, an ephemeral IP will be created with this networkTier. If an AccessConfig with a valid external IP address is specified, it must match that of the networkTier associated with the Address resource owning that IP.
     */
    networkTier?: AccessConfigNetworkTierEnum;
    /**
     * [Output Only] The public DNS domain name for the instance.
     */
    publicDnsName?: string;
    /**
     * The DNS domain name for the public PTR record. You can set this field only if the `setPublicPtr` field is enabled in accessConfig. If this field is unspecified in ipv6AccessConfig, a default PTR record will be createc for first IP in associated external IPv6 range.
     */
    publicPtrDomainName?: string;
    /**
     * [Output Only] The resource URL for the security policy associated with this access config.
     */
    securityPolicy?: string;
    /**
     * Specifies whether a public DNS 'A' record should be created for the external IP address of this access configuration.
     */
    setPublicDns?: boolean;
    /**
     * Specifies whether a public DNS 'PTR' record should be created to map the external IP address of the instance to a DNS domain name. This field is not used in ipv6AccessConfig. A default PTR record will be created if the VM has external IPv6 range associated.
     */
    setPublicPtr?: boolean;
    /**
     * The type of configuration. The default and only option is ONE_TO_ONE_NAT.
     */
    type?: AccessConfigTypeEnum;
}
