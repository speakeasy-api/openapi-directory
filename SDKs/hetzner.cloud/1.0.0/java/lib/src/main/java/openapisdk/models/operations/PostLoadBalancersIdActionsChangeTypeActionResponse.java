package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeTypeActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsChangeTypeActionResponseAction action;
    public PostLoadBalancersIdActionsChangeTypeActionResponse withAction(PostLoadBalancersIdActionsChangeTypeActionResponseAction action) {
        this.action = action;
        return this;
    }
}