package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteRouteActionResponse {
    @JsonProperty("action")
    public PostNetworksIdActionsDeleteRouteActionResponseAction action;
    public PostNetworksIdActionsDeleteRouteActionResponse withAction(PostNetworksIdActionsDeleteRouteActionResponseAction action) {
        this.action = action;
        return this;
    }
}