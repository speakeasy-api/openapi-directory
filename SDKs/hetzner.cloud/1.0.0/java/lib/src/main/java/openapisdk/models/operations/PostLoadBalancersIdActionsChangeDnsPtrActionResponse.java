package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeDnsPtrActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction action;
    public PostLoadBalancersIdActionsChangeDnsPtrActionResponse withAction(PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction action) {
        this.action = action;
        return this;
    }
}