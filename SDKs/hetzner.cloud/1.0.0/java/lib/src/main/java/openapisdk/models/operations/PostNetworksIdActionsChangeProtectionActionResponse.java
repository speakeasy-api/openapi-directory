package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsChangeProtectionActionResponse {
    @JsonProperty("action")
    public PostNetworksIdActionsChangeProtectionActionResponseAction action;
    public PostNetworksIdActionsChangeProtectionActionResponse withAction(PostNetworksIdActionsChangeProtectionActionResponseAction action) {
        this.action = action;
        return this;
    }
}