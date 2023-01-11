package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeProtectionActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsChangeProtectionActionResponseAction action;
    public PostLoadBalancersIdActionsChangeProtectionActionResponse withAction(PostLoadBalancersIdActionsChangeProtectionActionResponseAction action) {
        this.action = action;
        return this;
    }
}