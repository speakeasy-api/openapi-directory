package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsAttachToNetworkActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsAttachToNetworkActionResponseAction action;
    public PostServersIdActionsAttachToNetworkActionResponse withAction(PostServersIdActionsAttachToNetworkActionResponseAction action) {
        this.action = action;
        return this;
    }
}