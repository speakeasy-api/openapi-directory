package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsAttachToNetworkActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsAttachToNetworkActionResponseAction action;
    public PostLoadBalancersIdActionsAttachToNetworkActionResponse withAction(PostLoadBalancersIdActionsAttachToNetworkActionResponseAction action) {
        this.action = action;
        return this;
    }
}