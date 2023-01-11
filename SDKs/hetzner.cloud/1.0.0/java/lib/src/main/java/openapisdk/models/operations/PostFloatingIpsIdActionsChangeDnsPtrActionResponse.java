package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeDnsPtrActionResponse {
    @JsonProperty("action")
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction action;
    public PostFloatingIpsIdActionsChangeDnsPtrActionResponse withAction(PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction action) {
        this.action = action;
        return this;
    }
}