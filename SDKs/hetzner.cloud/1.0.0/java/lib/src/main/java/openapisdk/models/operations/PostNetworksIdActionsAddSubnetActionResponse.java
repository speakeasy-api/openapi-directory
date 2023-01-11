package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsAddSubnetActionResponse {
    @JsonProperty("action")
    public PostNetworksIdActionsAddSubnetActionResponseAction action;
    public PostNetworksIdActionsAddSubnetActionResponse withAction(PostNetworksIdActionsAddSubnetActionResponseAction action) {
        this.action = action;
        return this;
    }
}