import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.
 */
export declare enum PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum {
    Default = "default",
    Private = "private"
}
export declare class PolicyAlternativeNameServerConfigTargetNameServer extends SpeakeasyBase {
    /**
     * Forwarding path for this TargetNameServer. If unset or set to DEFAULT, Cloud DNS makes forwarding decisions based on address ranges; that is, RFC1918 addresses go to the VPC network, non-RFC1918 addresses go to the internet. When set to PRIVATE, Cloud DNS always sends queries through the VPC network for this target.
     */
    forwardingPath?: PolicyAlternativeNameServerConfigTargetNameServerForwardingPathEnum;
    /**
     * IPv4 address to forward queries to.
     */
    ipv4Address?: string;
    /**
     * IPv6 address to forward to. Does not accept both fields (ipv4 & ipv6) being populated. Public preview as of November 2022.
     */
    ipv6Address?: string;
    kind?: string;
}
