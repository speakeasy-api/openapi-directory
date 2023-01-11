package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFirewallsIdActionsActionsResponse {
    @JsonProperty("actions")
    public GetFirewallsIdActionsActionsResponseAction[] actions;
    public GetFirewallsIdActionsActionsResponse withActions(GetFirewallsIdActionsActionsResponseAction[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetFirewallsIdActionsActionsResponseMeta meta;
    public GetFirewallsIdActionsActionsResponse withMeta(GetFirewallsIdActionsActionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}