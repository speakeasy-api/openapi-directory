package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeProtectionActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsChangeProtectionActionResponseAction action;
    public PostServersIdActionsChangeProtectionActionResponse withAction(PostServersIdActionsChangeProtectionActionResponseAction action) {
        this.action = action;
        return this;
    }
}