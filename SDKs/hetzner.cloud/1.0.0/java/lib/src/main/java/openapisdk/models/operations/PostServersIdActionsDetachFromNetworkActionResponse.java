package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDetachFromNetworkActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsDetachFromNetworkActionResponseAction action;
    public PostServersIdActionsDetachFromNetworkActionResponse withAction(PostServersIdActionsDetachFromNetworkActionResponseAction action) {
        this.action = action;
        return this;
    }
}