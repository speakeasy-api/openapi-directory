package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostFloatingIpsIdActionsChangeProtectionActionResponse {
    @JsonProperty("action")
    public PostFloatingIpsIdActionsChangeProtectionActionResponseAction action;
    public PostFloatingIpsIdActionsChangeProtectionActionResponse withAction(PostFloatingIpsIdActionsChangeProtectionActionResponseAction action) {
        this.action = action;
        return this;
    }
}