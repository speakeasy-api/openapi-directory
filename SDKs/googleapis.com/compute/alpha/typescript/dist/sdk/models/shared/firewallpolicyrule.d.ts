import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallPolicyRuleMatcher } from "./firewallpolicyrulematcher";
import { FirewallPolicyRuleSecureTag } from "./firewallpolicyrulesecuretag";
/**
 * The direction in which this rule applies.
 */
export declare enum FirewallPolicyRuleDirectionEnum {
    Egress = "EGRESS",
    Ingress = "INGRESS"
}
/**
 * Represents a rule that describes one or more match conditions along with the action to be taken when traffic matches this condition (allow or deny).
 */
export declare class FirewallPolicyRule extends SpeakeasyBase {
    /**
     * The Action to perform when the client connection triggers the rule. Valid actions are "allow", "deny" and "goto_next".
     */
    action?: string;
    /**
     * An optional description for this resource.
     */
    description?: string;
    /**
     * The direction in which this rule applies.
     */
    direction?: FirewallPolicyRuleDirectionEnum;
    /**
     * Denotes whether the firewall policy rule is disabled. When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.
     */
    disabled?: boolean;
    /**
     * Denotes whether to enable logging for a particular rule. If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.
     */
    enableLogging?: boolean;
    /**
     * [Output only] Type of the resource. Always compute#firewallPolicyRule for firewall policy rules
     */
    kind?: string;
    /**
     * Represents a match condition that incoming traffic is evaluated against. Exactly one field must be specified.
     */
    match?: FirewallPolicyRuleMatcher;
    /**
     * An integer indicating the priority of a rule in the list. The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.
     */
    priority?: number;
    /**
     * An optional name for the rule. This field is not a unique identifier and can be updated.
     */
    ruleName?: string;
    /**
     * [Output Only] Calculation of the complexity of a single firewall policy rule.
     */
    ruleTupleCount?: number;
    /**
     * A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action = 'apply_security_profile_group' and cannot be specified for other actions.
     */
    securityProfileGroup?: string;
    /**
     * A list of network resource URLs to which this rule applies. This field allows you to control which network's VMs get this rule. If this field is left blank, all VMs within the organization will receive the rule.
     */
    targetResources?: string[];
    /**
     * A list of secure tags that controls which instances the firewall rule applies to. If targetSecureTag are specified, then the firewall rule applies only to instances in the VPC network that have one of those EFFECTIVE secure tags, if all the target_secure_tag are in INEFFECTIVE state, then this rule will be ignored. targetSecureTag may not be set at the same time as targetServiceAccounts. If neither targetServiceAccounts nor targetSecureTag are specified, the firewall rule applies to all instances on the specified network. Maximum number of target label tags allowed is 256.
     */
    targetSecureTags?: FirewallPolicyRuleSecureTag[];
    /**
     * A list of service accounts indicating the sets of instances that are applied with this rule.
     */
    targetServiceAccounts?: string[];
    /**
     * Boolean flag indicating if the traffic should be TLS decrypted. Can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.
     */
    tlsInspect?: boolean;
}
