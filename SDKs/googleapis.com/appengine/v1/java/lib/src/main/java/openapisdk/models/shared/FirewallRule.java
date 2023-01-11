package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FirewallRule
 * A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests.
**/
public class FirewallRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public FirewallRuleActionEnum action;
    public FirewallRule withAction(FirewallRuleActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FirewallRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public FirewallRule withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRange")
    public String sourceRange;
    public FirewallRule withSourceRange(String sourceRange) {
        this.sourceRange = sourceRange;
        return this;
    }
}