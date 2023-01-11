package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsRebootActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsRebootActionResponseAction action;
    public PostServersIdActionsRebootActionResponse withAction(PostServersIdActionsRebootActionResponseAction action) {
        this.action = action;
        return this;
    }
}