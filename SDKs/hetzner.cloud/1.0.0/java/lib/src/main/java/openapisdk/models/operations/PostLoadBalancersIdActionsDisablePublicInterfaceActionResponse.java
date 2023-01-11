package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction action;
    public PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse withAction(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction action) {
        this.action = action;
        return this;
    }
}