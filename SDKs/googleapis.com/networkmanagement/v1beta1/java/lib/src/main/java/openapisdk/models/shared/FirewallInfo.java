package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallInfo
 * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
**/
public class FirewallInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public String action;
    public FirewallInfo withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public String direction;
    public FirewallInfo withDirection(String direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FirewallInfo withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firewallRuleType")
    public FirewallInfoFirewallRuleTypeEnum firewallRuleType;
    public FirewallInfo withFirewallRuleType(FirewallInfoFirewallRuleTypeEnum firewallRuleType) {
        this.firewallRuleType = firewallRuleType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkUri")
    public String networkUri;
    public FirewallInfo withNetworkUri(String networkUri) {
        this.networkUri = networkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy")
    public String policy;
    public FirewallInfo withPolicy(String policy) {
        this.policy = policy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public FirewallInfo withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetServiceAccounts")
    public String[] targetServiceAccounts;
    public FirewallInfo withTargetServiceAccounts(String[] targetServiceAccounts) {
        this.targetServiceAccounts = targetServiceAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetTags")
    public String[] targetTags;
    public FirewallInfo withTargetTags(String[] targetTags) {
        this.targetTags = targetTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public FirewallInfo withUri(String uri) {
        this.uri = uri;
        return this;
    }
}