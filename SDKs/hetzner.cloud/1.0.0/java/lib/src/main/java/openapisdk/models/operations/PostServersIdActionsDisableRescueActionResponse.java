package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsDisableRescueActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsDisableRescueActionResponseAction action;
    public PostServersIdActionsDisableRescueActionResponse withAction(PostServersIdActionsDisableRescueActionResponseAction action) {
        this.action = action;
        return this;
    }
}