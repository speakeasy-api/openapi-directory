package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFirewallsIdActionsSetRulesActionsResponse {
    @JsonProperty("actions")
    public PostFirewallsIdActionsSetRulesActionsResponseAction[] actions;
    public PostFirewallsIdActionsSetRulesActionsResponse withActions(PostFirewallsIdActionsSetRulesActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PostFirewallsIdActionsSetRulesActionsResponseMeta meta;
    public PostFirewallsIdActionsSetRulesActionsResponse withMeta(PostFirewallsIdActionsSetRulesActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}