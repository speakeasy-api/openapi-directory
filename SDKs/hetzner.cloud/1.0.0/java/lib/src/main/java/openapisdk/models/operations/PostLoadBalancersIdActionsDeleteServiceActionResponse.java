package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDeleteServiceActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsDeleteServiceActionResponseAction action;
    public PostLoadBalancersIdActionsDeleteServiceActionResponse withAction(PostLoadBalancersIdActionsDeleteServiceActionResponseAction action) {
        this.action = action;
        return this;
    }
}