package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction action;
    public PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse withAction(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction action) {
        this.action = action;
        return this;
    }
}