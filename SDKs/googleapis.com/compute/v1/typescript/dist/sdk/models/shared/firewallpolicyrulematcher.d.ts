import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyRuleMatcherLayer4Config } from "./firewallpolicyrulematcherlayer4config";
import { FirewallPolicyRuleSecureTag } from "./firewallpolicyrulesecuretag";
/**
 * Represents a match condition that incoming traffic is evaluated against. Exactly one field must be specified.
 */
export declare class FirewallPolicyRuleMatcher extends SpeakeasyBase {
    /**
     * Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.
     */
    destAddressGroups?: string[];
    /**
     * Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.
     */
    destFqdns?: string[];
    /**
     * CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.
     */
    destIpRanges?: string[];
    /**
     * Region codes whose IP addresses will be used to match for destination of traffic. Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of dest region codes allowed is 5000.
     */
    destRegionCodes?: string[];
    /**
     * Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.
     */
    destThreatIntelligences?: string[];
    /**
     * Pairs of IP protocols and ports that the rule should match.
     */
    layer4Configs?: FirewallPolicyRuleMatcherLayer4Config[];
    /**
     * Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.
     */
    srcAddressGroups?: string[];
    /**
     * Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.
     */
    srcFqdns?: string[];
    /**
     * CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.
     */
    srcIpRanges?: string[];
    /**
     * Region codes whose IP addresses will be used to match for source of traffic. Should be specified as 2 letter country code defined as per ISO 3166 alpha-2 country codes. ex."US" Maximum number of source region codes allowed is 5000.
     */
    srcRegionCodes?: string[];
    /**
     * List of secure tag values, which should be matched at the source of the traffic. For INGRESS rule, if all the srcSecureTag are INEFFECTIVE, and there is no srcIpRange, this rule will be ignored. Maximum number of source tag values allowed is 256.
     */
    srcSecureTags?: FirewallPolicyRuleSecureTag[];
    /**
     * Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.
     */
    srcThreatIntelligences?: string[];
}
