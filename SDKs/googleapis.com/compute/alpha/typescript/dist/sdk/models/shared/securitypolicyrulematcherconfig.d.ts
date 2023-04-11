import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyRuleMatcherConfigDestinationPort } from "./securitypolicyrulematcherconfigdestinationport";
import { SecurityPolicyRuleMatcherConfigLayer4Config } from "./securitypolicyrulematcherconfiglayer4config";
export declare class SecurityPolicyRuleMatcherConfig extends SpeakeasyBase {
    /**
     * CIDR IP address range. This field may only be specified when versioned_expr is set to FIREWALL.
     */
    destIpRanges?: string[];
    /**
     * Pairs of IP protocols and ports that the rule should match. This field may only be specified when versioned_expr is set to FIREWALL.
     */
    destPorts?: SecurityPolicyRuleMatcherConfigDestinationPort[];
    /**
     * Pairs of IP protocols and ports that the rule should match. This field may only be specified when versioned_expr is set to FIREWALL.
     */
    layer4Configs?: SecurityPolicyRuleMatcherConfigLayer4Config[];
    /**
     * CIDR IP address range. Maximum number of src_ip_ranges allowed is 10.
     */
    srcIpRanges?: string[];
}
