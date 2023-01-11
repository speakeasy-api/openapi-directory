package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsUpdateServiceActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsUpdateServiceActionResponseAction action;
    public PostLoadBalancersIdActionsUpdateServiceActionResponse withAction(PostLoadBalancersIdActionsUpdateServiceActionResponseAction action) {
        this.action = action;
        return this;
    }
}