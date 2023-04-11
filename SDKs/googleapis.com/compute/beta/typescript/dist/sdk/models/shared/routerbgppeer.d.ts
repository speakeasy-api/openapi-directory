import { SpeakeasyBase } from "../../../internal/utils";
import { RouterAdvertisedIpRange } from "./routeradvertisediprange";
import { RouterBgpPeerBfd } from "./routerbgppeerbfd";
/**
 * User-specified flag to indicate which mode to use for advertisement.
 */
export declare enum RouterBgpPeerAdvertiseModeEnum {
    Custom = "CUSTOM",
    Default = "DEFAULT"
}
export declare enum RouterBgpPeerAdvertisedGroupsEnum {
    AllSubnets = "ALL_SUBNETS"
}
/**
 * The status of the BGP peer connection. If set to FALSE, any active session with the peer is terminated and all associated routing information is removed. If set to TRUE, the peer connection can be established with routing information. The default is TRUE.
 */
export declare enum RouterBgpPeerEnableEnum {
    False = "FALSE",
    True = "TRUE"
}
/**
 * [Output Only] The resource that configures and manages this BGP peer. - MANAGED_BY_USER is the default value and can be managed by you or other users - MANAGED_BY_ATTACHMENT is a BGP peer that is configured and managed by Cloud Interconnect, specifically by an InterconnectAttachment of type PARTNER. Google automatically creates, updates, and deletes this type of BGP peer when the PARTNER InterconnectAttachment is created, updated, or deleted.
 */
export declare enum RouterBgpPeerManagementTypeEnum {
    ManagedByAttachment = "MANAGED_BY_ATTACHMENT",
    ManagedByUser = "MANAGED_BY_USER"
}
export declare class RouterBgpPeer extends SpeakeasyBase {
    /**
     * User-specified flag to indicate which mode to use for advertisement.
     */
    advertiseMode?: RouterBgpPeerAdvertiseModeEnum;
    /**
     * User-specified list of prefix groups to advertise in custom mode, which currently supports the following option: - ALL_SUBNETS: Advertises all of the router's own VPC subnets. This excludes any routes learned for subnets that use VPC Network Peering. Note that this field can only be populated if advertise_mode is CUSTOM and overrides the list defined for the router (in the "bgp" message). These groups are advertised in addition to any specified prefixes. Leave this field blank to advertise no custom groups.
     */
    advertisedGroups?: RouterBgpPeerAdvertisedGroupsEnum[];
    /**
     * User-specified list of individual IP ranges to advertise in custom mode. This field can only be populated if advertise_mode is CUSTOM and overrides the list defined for the router (in the "bgp" message). These IP ranges are advertised in addition to any specified groups. Leave this field blank to advertise no custom IP ranges.
     */
    advertisedIpRanges?: RouterAdvertisedIpRange[];
    /**
     * The priority of routes advertised to this BGP peer. Where there is more than one matching route of maximum length, the routes with the lowest priority value win.
     */
    advertisedRoutePriority?: number;
    bfd?: RouterBgpPeerBfd;
    /**
     * The status of the BGP peer connection. If set to FALSE, any active session with the peer is terminated and all associated routing information is removed. If set to TRUE, the peer connection can be established with routing information. The default is TRUE.
     */
    enable?: RouterBgpPeerEnableEnum;
    /**
     * Enable IPv6 traffic over BGP Peer. If not specified, it is disabled by default.
     */
    enableIpv6?: boolean;
    /**
     * Name of the interface the BGP peer is associated with.
     */
    interfaceName?: string;
    /**
     * IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.
     */
    ipAddress?: string;
    /**
     * IPv6 address of the interface inside Google Cloud Platform.
     */
    ipv6NexthopAddress?: string;
    /**
     * [Output Only] The resource that configures and manages this BGP peer. - MANAGED_BY_USER is the default value and can be managed by you or other users - MANAGED_BY_ATTACHMENT is a BGP peer that is configured and managed by Cloud Interconnect, specifically by an InterconnectAttachment of type PARTNER. Google automatically creates, updates, and deletes this type of BGP peer when the PARTNER InterconnectAttachment is created, updated, or deleted.
     */
    managementType?: RouterBgpPeerManagementTypeEnum;
    /**
     * Present if MD5 authentication is enabled for the peering. Must be the name of one of the entries in the Router.md5_authentication_keys. The field must comply with RFC1035.
     */
    md5AuthenticationKeyName?: string;
    /**
     * Name of this BGP peer. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Peer BGP Autonomous System Number (ASN). Each BGP interface may use a different value.
     */
    peerAsn?: number;
    /**
     * IP address of the BGP interface outside Google Cloud Platform. Only IPv4 is supported.
     */
    peerIpAddress?: string;
    /**
     * IPv6 address of the BGP interface outside Google Cloud Platform.
     */
    peerIpv6NexthopAddress?: string;
    /**
     * URI of the VM instance that is used as third-party router appliances such as Next Gen Firewalls, Virtual Routers, or Router Appliances. The VM instance must be located in zones contained in the same region as this Cloud Router. The VM instance is the peer side of the BGP session.
     */
    routerApplianceInstance?: string;
}
