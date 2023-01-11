package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeTypeActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsChangeTypeActionResponseAction action;
    public PostServersIdActionsChangeTypeActionResponse withAction(PostServersIdActionsChangeTypeActionResponseAction action) {
        this.action = action;
        return this;
    }
}