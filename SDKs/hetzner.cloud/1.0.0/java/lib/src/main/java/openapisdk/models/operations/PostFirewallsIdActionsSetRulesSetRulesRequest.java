package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFirewallsIdActionsSetRulesSetRulesRequest {
    @JsonProperty("rules")
    public PostFirewallsIdActionsSetRulesSetRulesRequestRule[] rules;
    public PostFirewallsIdActionsSetRulesSetRulesRequest withRules(PostFirewallsIdActionsSetRulesSetRulesRequestRule[] rules) {
        this.rules = rules;
        return this;
    }
}