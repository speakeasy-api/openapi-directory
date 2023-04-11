import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.
 */
export declare enum FirewallPolicyRuleSecureTagStateEnum {
    Effective = "EFFECTIVE",
    Ineffective = "INEFFECTIVE"
}
export declare class FirewallPolicyRuleSecureTag extends SpeakeasyBase {
    /**
     * Name of the secure tag, created with TagManager's TagValue API.
     */
    name?: string;
    /**
     * [Output Only] State of the secure tag, either `EFFECTIVE` or `INEFFECTIVE`. A secure tag is `INEFFECTIVE` when it is deleted or its network is deleted.
     */
    state?: FirewallPolicyRuleSecureTagStateEnum;
}
