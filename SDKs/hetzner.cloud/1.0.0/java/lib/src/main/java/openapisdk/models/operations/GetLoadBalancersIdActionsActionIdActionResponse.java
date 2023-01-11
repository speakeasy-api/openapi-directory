package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLoadBalancersIdActionsActionIdActionResponse {
    @JsonProperty("action")
    public GetLoadBalancersIdActionsActionIdActionResponseAction action;
    public GetLoadBalancersIdActionsActionIdActionResponse withAction(GetLoadBalancersIdActionsActionIdActionResponseAction action) {
        this.action = action;
        return this;
    }
}