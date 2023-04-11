import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The firewall rule's type.
 */
export declare enum FirewallInfoFirewallRuleTypeEnum {
    FirewallRuleTypeUnspecified = "FIREWALL_RULE_TYPE_UNSPECIFIED",
    HierarchicalFirewallPolicyRule = "HIERARCHICAL_FIREWALL_POLICY_RULE",
    VpcFirewallRule = "VPC_FIREWALL_RULE",
    ImpliedVpcFirewallRule = "IMPLIED_VPC_FIREWALL_RULE",
    ServerlessVpcAccessManagedFirewallRule = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
    NetworkFirewallPolicyRule = "NETWORK_FIREWALL_POLICY_RULE"
}
/**
 * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
 */
export declare class FirewallInfo extends SpeakeasyBase {
    /**
     * Possible values: ALLOW, DENY
     */
    action?: string;
    /**
     * Possible values: INGRESS, EGRESS
     */
    direction?: string;
    /**
     * The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.
     */
    displayName?: string;
    /**
     * The firewall rule's type.
     */
    firewallRuleType?: FirewallInfoFirewallRuleTypeEnum;
    /**
     * The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules.
     */
    networkUri?: string;
    /**
     * The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules.
     */
    policy?: string;
    /**
     * The priority of the firewall rule.
     */
    priority?: number;
    /**
     * The target service accounts specified by the firewall rule.
     */
    targetServiceAccounts?: string[];
    /**
     * The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules.
     */
    targetTags?: string[];
    /**
     * The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules.
     */
    uri?: string;
}
