package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsAddServiceActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsAddServiceActionResponseAction action;
    public PostLoadBalancersIdActionsAddServiceActionResponse withAction(PostLoadBalancersIdActionsAddServiceActionResponseAction action) {
        this.action = action;
        return this;
    }
}