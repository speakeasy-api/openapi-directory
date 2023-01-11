package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsAddTargetActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsAddTargetActionResponseAction action;
    public PostLoadBalancersIdActionsAddTargetActionResponse withAction(PostLoadBalancersIdActionsAddTargetActionResponseAction action) {
        this.action = action;
        return this;
    }
}