package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostNetworksIdActionsDeleteSubnetActionResponse {
    @JsonProperty("action")
    public PostNetworksIdActionsDeleteSubnetActionResponseAction action;
    public PostNetworksIdActionsDeleteSubnetActionResponse withAction(PostNetworksIdActionsDeleteSubnetActionResponseAction action) {
        this.action = action;
        return this;
    }
}