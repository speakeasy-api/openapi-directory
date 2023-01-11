package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFirewallsIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetFirewallsIdActionsActionIdActionResponseAction action;
    public GetFirewallsIdActionsActionIdActionResponse withAction(GetFirewallsIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}