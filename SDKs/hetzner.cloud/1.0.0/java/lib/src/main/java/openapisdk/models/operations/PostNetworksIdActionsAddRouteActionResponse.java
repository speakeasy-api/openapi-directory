package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddRouteActionResponse {
    @JsonProperty("action")
    public PostNetworksIdActionsAddRouteActionResponseAction action;
    public PostNetworksIdActionsAddRouteActionResponse withAction(PostNetworksIdActionsAddRouteActionResponseAction action) {
        this.action = action;
        return this;
    }
}