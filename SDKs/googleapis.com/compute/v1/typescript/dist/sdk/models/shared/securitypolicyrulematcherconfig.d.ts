import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecurityPolicyRuleMatcherConfig extends SpeakeasyBase {
    /**
     * CIDR IP address range. Maximum number of src_ip_ranges allowed is 10.
     */
    srcIpRanges?: string[];
}
