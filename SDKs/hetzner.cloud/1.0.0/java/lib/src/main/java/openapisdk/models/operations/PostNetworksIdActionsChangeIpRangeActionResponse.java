package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeIpRangeActionResponse {
    @JsonProperty("action")
    public PostNetworksIdActionsChangeIpRangeActionResponseAction action;
    public PostNetworksIdActionsChangeIpRangeActionResponse withAction(PostNetworksIdActionsChangeIpRangeActionResponseAction action) {
        this.action = action;
        return this;
    }
}