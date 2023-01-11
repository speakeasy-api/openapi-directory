package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsRemoveTargetActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsRemoveTargetActionResponseAction action;
    public PostLoadBalancersIdActionsRemoveTargetActionResponse withAction(PostLoadBalancersIdActionsRemoveTargetActionResponseAction action) {
        this.action = action;
        return this;
    }
}