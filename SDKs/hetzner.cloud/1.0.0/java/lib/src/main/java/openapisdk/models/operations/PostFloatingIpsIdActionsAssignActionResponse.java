package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsAssignActionResponse {
    @JsonProperty("action")
    public PostFloatingIpsIdActionsAssignActionResponseAction action;
    public PostFloatingIpsIdActionsAssignActionResponse withAction(PostFloatingIpsIdActionsAssignActionResponseAction action) {
        this.action = action;
        return this;
    }
}