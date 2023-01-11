package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsResetActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsResetActionResponseAction action;
    public PostServersIdActionsResetActionResponse withAction(PostServersIdActionsResetActionResponseAction action) {
        this.action = action;
        return this;
    }
}