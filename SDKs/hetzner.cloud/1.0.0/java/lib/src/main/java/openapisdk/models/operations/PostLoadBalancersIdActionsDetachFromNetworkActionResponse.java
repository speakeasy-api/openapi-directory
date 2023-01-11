package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDetachFromNetworkActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction action;
    public PostLoadBalancersIdActionsDetachFromNetworkActionResponse withAction(PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction action) {
        this.action = action;
        return this;
    }
}