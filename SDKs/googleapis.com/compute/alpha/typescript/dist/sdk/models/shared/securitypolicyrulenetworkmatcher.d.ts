import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch } from "./securitypolicyrulenetworkmatcheruserdefinedfieldmatch";
/**
 * Represents a match condition that incoming network traffic is evaluated against.
 */
export declare class SecurityPolicyRuleNetworkMatcher extends SpeakeasyBase {
    /**
     * Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
     */
    destIpRanges?: string[];
    /**
     * Destination port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
     */
    destPorts?: string[];
    /**
     * IPv4 protocol / IPv6 next header (after extension headers). Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".
     */
    ipProtocols?: string[];
    /**
     * BGP Autonomous System Number associated with the source IP address.
     */
    srcAsns?: number[];
    /**
     * Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.
     */
    srcIpRanges?: string[];
    /**
     * Source port numbers for TCP/UDP/SCTP. Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").
     */
    srcPorts?: string[];
    /**
     * Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.
     */
    srcRegionCodes?: string[];
    /**
     * User-defined fields. Each element names a defined field and lists the matching values for that field.
     */
    userDefinedFields?: SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[];
}
