package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsShutdownActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsShutdownActionResponseAction action;
    public PostServersIdActionsShutdownActionResponse withAction(PostServersIdActionsShutdownActionResponseAction action) {
        this.action = action;
        return this;
    }
}