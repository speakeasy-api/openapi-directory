package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeDnsPtrActionResponse {
    @JsonProperty("action")
    public PostServersIdActionsChangeDnsPtrActionResponseAction action;
    public PostServersIdActionsChangeDnsPtrActionResponse withAction(PostServersIdActionsChangeDnsPtrActionResponseAction action) {
        this.action = action;
        return this;
    }
}