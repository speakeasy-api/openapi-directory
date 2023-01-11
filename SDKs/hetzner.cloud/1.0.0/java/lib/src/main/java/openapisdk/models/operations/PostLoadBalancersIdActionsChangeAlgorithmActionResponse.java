package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostLoadBalancersIdActionsChangeAlgorithmActionResponse {
    @JsonProperty("action")
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction action;
    public PostLoadBalancersIdActionsChangeAlgorithmActionResponse withAction(PostLoadBalancersIdActionsChangeAlgorithmActionResponseAction action) {
        this.action = action;
        return this;
    }
}