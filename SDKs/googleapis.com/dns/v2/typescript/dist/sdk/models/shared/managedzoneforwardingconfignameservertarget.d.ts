import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.
 */
export declare enum ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum {
    Default = "DEFAULT",
    Private = "PRIVATE"
}
export declare class ManagedZoneForwardingConfigNameServerTarget extends SpeakeasyBase {
    /**
     * Forwarding path for this NameServerTarget. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on IP address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.
     */
    forwardingPath?: ManagedZoneForwardingConfigNameServerTargetForwardingPathEnum;
    /**
     * IPv4 address of a target name server.
     */
    ipv4Address?: string;
    /**
     * IPv6 address of a target name server. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.
     */
    ipv6Address?: string;
    kind?: string;
}
