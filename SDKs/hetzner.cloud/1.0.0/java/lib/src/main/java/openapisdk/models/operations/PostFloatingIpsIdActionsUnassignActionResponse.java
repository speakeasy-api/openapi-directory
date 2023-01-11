package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsUnassignActionResponse {
    @JsonProperty("action")
    public PostFloatingIpsIdActionsUnassignActionResponseAction action;
    public PostFloatingIpsIdActionsUnassignActionResponse withAction(PostFloatingIpsIdActionsUnassignActionResponseAction action) {
        this.action = action;
        return this;
    }
}